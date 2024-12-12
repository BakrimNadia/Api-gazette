import { Category } from "../models/category.model.js";
import "../models/associations.js";

const categoryController = {
    getAll : async (req, res) => {
        const categoryList = await Category.findAll();
        res.json(categoryList);
    },
    getById : async (req, res) => {
        const categoryId = parseInt(req.params.id);

        if (!categoryId) {
            return res.status(404).json({ error: "id inconnu" });
        }

        const category = await Category.findByPk(categoryId);

        if (!category) {
            return res.status(404).json({ error: "categorie inconnu" });
        }
        res.json(category);
    },

    insert : async (req, res) => {
        const { name } = req.body;
        if (!name) {
            console.log("Tous les champs sont obligatoire");
            return res.status(400).json({ error: "Tous les champs sont obligatoire" });
        }
        const newCategory = {
            name,
        };
        await Category.create(newCategory);
        res.status(201).json(newCategory);
    },

    update : async (req, res) => {
        const categoryId = parseInt(req.params.id);
        const { name } = req.body;
        if (!categoryId) {
            return res.status(404).json({ error: "id inconnu" });
        }
        if (!name) {
            return res.status(400).json({ error: "Tous les champs sont obligatoire" });
        }
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.status(404).json({ error: "categorie inconnu" });
        }
        category.name = name;
        await category.save();
        res.json(category);
    },

    delete : async (req, res) => {
        const categoryId = parseInt(req.params.id);
        if (!categoryId) {
            return res.status(404).json({ error: "id inconnu" });
        }
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.status(404).json({ error: "categorie inconnu" });
        }
        await category.destroy();
        res.json({ message: "categorie supprimé" });
    }
};

export default categoryController;
