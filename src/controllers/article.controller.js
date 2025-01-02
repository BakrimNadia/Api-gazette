import { Article } from "../models/article.model.js";
import { User } from "../models/user.model.js";
import '../models/associations.js';
import sanitizeHtml from 'sanitize-html';

const articleController = {
  getAll: async (req, res) => {
    try {
      const articleList = await Article.findAll({
        include: [{
          model: User,
          as: 'articleAuthor',
          attributes: ['firstname', 'lastname'],
        }]
      });
      res.json(articleList);
    } catch (error) {
      console.error("Erreur lors de la récupération des articles :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  getById: async (req, res) => {
    const articleId = parseInt(req.params.id);

    if (!articleId) {
      return res.status(404).json({ error: "ID inconnu" });
    }
    try {
      const article = await Article.findByPk(articleId, {
        include: [{
          model: User,
          as: 'articleAuthor',
          attributes: ['firstname', 'lastname'],
        }]
      });

      if (!article) {
        return res.status(404).json({ error: "Article inconnu" });
      }

      res.json(article);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'article :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  insert: async (req, res) => {
    const {
      picture,
      title,
      subtitle,
      user_id,
      content,
      date_publication,
    } = req.body;

    if (!title || !subtitle || !user_id || !content || !date_publication) {
      console.log("Tous les champs sont obligatoires");
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    try {
      const sanitizedContent = sanitizeHtml(content);
      const sanitizedSubtitle = sanitizeHtml(subtitle);
      const sanitizedTitle = sanitizeHtml(title);

      const newArticle = await Article.create({
        picture,
        title: sanitizedTitle,
        subtitle: sanitizedSubtitle,
        user_id,
        content: sanitizedContent,
        date_publication,
      });

      res.status(201).json(newArticle);
    } catch (error) {
      console.error("Erreur lors de l'insertion de l'article :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  update: async (req, res) => {
    const articleId = parseInt(req.params.id);

    if (!articleId) {
      return res.status(404).json({ error: "ID inconnu" });
    }

    const {
      picture,
      title,
      subtitle,
      user_id,
      content,
      date_publication,
    } = req.body;

    if (!title || !subtitle || !user_id || !content || !date_publication) {
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    try {
      const article = await Article.findByPk(articleId);

      if (!article) {
        return res.status(404).json({ error: "Article inconnu" });
      }

      const sanitizedContent = sanitizeHtml(content);

      const updatedArticle = await article.update({
        picture,
        title,
        subtitle,
        user_id,
        content: sanitizedContent,
        date_publication,
      });

      res.json(updatedArticle);
    } catch (error) {
      console.error("Erreur lors de la modification de l'article :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  delete: async (req, res) => {
    const articleId = parseInt(req.params.id);

    if (!articleId) {
      return res.status(404).json({ error: "ID inconnu" });
    }

    try {
      const article = await Article.findByPk(articleId);

      if (!article) {
        return res.status(404).json({ error: "Article inconnu" });
      }

      await Article.destroy({
        where: { id: articleId },
      });

      res.status(200).json({ message: "Article supprimé avec succès" });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};

export default articleController;
