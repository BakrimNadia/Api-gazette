import { News } from "../models/news.model.js";

const newsController = {
  getAll: async (req, res) => {
    const newsList = await News.findAll();
    res.json(newsList);
  },

  getById: async (req, res) => {
    const newsId = parseInt(req.params.id);

    if (!newsId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const news = await News.findByPk(newsId);

    if (!news) {
      return res.status(404).json({ error: "Note d'information inconnu" });
    }
    res.json(news);
  },

  insert: async (req, res) => {
    const {
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication,
    } = req.body;
    if (
      !title ||
      !subtitle ||
      !author ||
      !content ||
      !date_publication
    ) {
      console.log("Tous les champs sont obligatoire");
      return res
        .status(400)
        .json({ error: "Tous les champs sont obligatoire" });
    }
    const newNews = {
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication: date_publication,
    };
    await News.create(newNews);
    res.status(201).json(newNews);
  },

  update: async (req, res) => {
    const newsId = parseInt(req.params.id);

    if (!newsId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const {
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication,
    } = req.body;

    const news = await News.findByPk(newsId);

    if (!news) {
      return res.status(404).json({ error: "Note d'information inconnu" });
    }

    const updateNews = await News.update({
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication: date_publication,
    });

    res.json(updateNews);
  },

  delete: async (req, res) => {
    const newsId = parseInt(req.params.id);

    if (!newsId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const news = await News.findByPk(newsId);

    if (!news) {
      return res.status(404).json({ error: "Note d'information inconnue" });
    }

    await News.destroy({
      where: { id: newsId },
    });

    res.status(200).json({ message: "Note d'information supprimée avec succès" });
  },
};

export default newsController;