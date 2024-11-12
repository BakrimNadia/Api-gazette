import { User } from "../models/user.model.js";

const userController = {
  getAll: async (req, res) => {
    try {
      const userList = await User.findAll();
      res.json(userList);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  getById: async (req, res) => {
    const userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(404).json({ error: "ID invalide" });
    }

    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: "Utilisateur inconnu" });
      }

      res.json(user);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  update: async (req, res) => {
    const userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(404).json({ error: "ID invalide" });
    }

    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      const {
        avatar,
        lastname,
        firstname,
        email,
        password,
        role,
        is_active,
      } = req.body;

      if (!avatar || !lastname || !firstname || !email || !password || !role || typeof is_active === 'undefined') {
        return res.status(400).json({ error: "Tous les champs sont obligatoires" });
      }

      await user.update({
        avatar,
        lastname,
        firstname,
        email,
        password,
        role,
        is_active,
      });

      res.json(user);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  softDelete: async (req, res) => {
    const email = req.body.email;

    if (!email) {
      return res.status(400).json({ error: "L'email est obligatoire" });
    }

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      user.is_active = false;
      await user.save();

      res.json(user);
    } catch (error) {
      console.error("Erreur lors de la désactivation de l'utilisateur :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};

export default userController;
