import { User } from "../models/user.model.js";

const userController = {
  getAll: async (req, res) => {
    const userList = await User.findAll();
    res.json(userList);
  },

  getByEmail: async (req, res) => {
    const email = req.body.email;

    if (!email) {
      return res.status(404).json({ error: "cet email n'existe pas" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur inconnu" });
    }
    res.json(user);
  },

  update: async (req, res) => {
    const userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(404).json({ error: "ID invalide" });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const {
      lastname,
      firstname,
      email,
      password,
      role,
    } = req.body;
    if (
      
      !lastname ||
      !firstname ||
      !email ||
      !password ||
      !role
    ) {
      return res
        .status(400)
        .json({ error: "Tous les champs sont obligatoires" });
    }

    const updatedUser = {
      
      lastname,
      firstname,
      email,
      birthdate,
      password,
      role,
    };

    try {
      await user.update(updatedUser);
      res.json(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
  },

  softDelete: async (req, res) => {
    const email = req.body.email;

    if (!email) {
      return res
        .status(400)
        .json({ error: "Tous les champs sont obligatoire" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    user.is_active = false;

    try {
      user.save();
      res.json(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la desactivation de l'utilisateur" });
    }
  },
};

export default userController;