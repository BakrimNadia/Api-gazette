import { News } from "../models/news.model.js";
import { User } from "../models/user.model.js";
import '../models/associations.js';
import sanitizeHtml from 'sanitize-html';

const newsController = {
  getAll: async (req, res) => {
    try {
      const newsList = await News.findAll({
        include: [{
          model: User,
          as: 'newsAuthor',
          attributes: ['firstname', 'lastname'],
        }]
      });
      res.json(newsList);
    } catch (error) {
      console.error("Erreur lors de la récupération des news :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  getById: async (req, res) => {
    const newsId = parseInt(req.params.id);

    if (!newsId) {
      return res.status(404).json({ error: "ID inconnu" });
    }

    try {
      const news = await News.findByPk(newsId, {
        include: [{
          model: User,
          as: 'newsAuthor',
          attributes: ['firstname', 'lastname'],
        }]
      });

      if (!news) {
        return res.status(404).json({ error: "Note d'information inconnue" });
      }

      res.json(news);
    } catch (error) {
      console.error("Erreur lors de la récupération de la note d'information :", error);
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
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    try {
      const sanitizedContent = sanitizeHtml(content);
      const sanitizedTitle = sanitizeHtml(title);
      const sanitizedSubtitle = sanitizeHtml(subtitle);

      const newNews = await News.create({
        picture,
        title: sanitizedTitle,
        subtitle: sanitizedSubtitle,
        user_id,
        content: sanitizedContent,
        date_publication,
      });

      res.status(201).json(newNews);
    } catch (error) {
      console.error("Erreur lors de l'insertion de la note d'information :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  update: async (req, res) => {
    const newsId = parseInt(req.params.id);

    if (!newsId) {
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
      const news = await News.findByPk(newsId);

      if (!news) {
        return res.status(404).json({ error: "Note d'information inconnue" });
      }

      const sanitizedContent = sanitizeHtml(content);
      const sanitizedTitle = sanitizeHtml(title);
      const sanitizedSubtitle = sanitizeHtml(subtitle);

      await news.update({
        picture,
        title: sanitizedTitle,
        subtitle: sanitizedSubtitle,
        user_id,
        content: sanitizedContent,
        date_publication,
      });

      res.json(news);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la note d'information :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  delete: async (req, res) => {
    const newsId = parseInt(req.params.id);

    if (!newsId) {
      return res.status(404).json({ error: "ID inconnu" });
    }

    try {
      const news = await News.findByPk(newsId);

      if (!news) {
        return res.status(404).json({ error: "News inconnue" });
      }

      await News.destroy({
        where: { id: newsId },
      });

      res.status(200).json({ message: "News supprimée avec succès" });
    } catch (error) {
      console.error("Erreur lors de la suppression de la note d'information :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};

export default newsController;
