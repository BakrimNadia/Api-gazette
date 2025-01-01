import { Category } from "../models/category.model.js";
import "../models/associations.js";

const categoryController = {
  getAll: async (req, res) => {
    try {
      const categoryList = await Category.findAll();
      res.json(categoryList);
    } catch (error) {
      console.error("Erreur lors de la récupération des categories :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  getById: async (req, res) => {
    try {
      const categoryId = parseInt(req.params.id);

      if (!categoryId) {
        return res.status(404).json({ error: "id inconnu" });
      }

      const category = await Category.findByPk(categoryId);

      if (!category) {
        return res.status(404).json({ error: "categorie inconnu" });
      }
      res.json(category);
    } catch (error) {
      console.error("Erreur lors de la récupération de la categorie :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  insert: async (req, res) => {
    const { name } = req.body;

    if (!name) {
      console.log("Tous les champs sont obligatoires");
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    try {
      const newCategory = {
        name,
      };

      await Category.create(newCategory);
      res.status(201).json(newCategory);
    } catch (error) {
      console.error("Erreur lors de la création de la categorie :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  update: async (req, res) => {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;

    if (!categoryId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    if (!name) {
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    try {
      const category = await Category.findByPk(categoryId);

      if (!category) {
        return res.status(404).json({ error: "categorie inconnu" });
      }

      category.name = name;
      await category.save();
      res.json(category);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la categorie :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  delete: async (req, res) => {
    const categoryId = parseInt(req.params.id);

    if (!categoryId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    try {
      const category = await Category.findByPk(categoryId);

      if (!category) {
        return res.status(404).json({ error: "categorie inconnu" });
      }

      await category.destroy();
      res.json({ message: "categorie supprimée" });
    } catch (error) {
      console.error("Erreur lors de la suppression de la categorie :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};

export default categoryController;
