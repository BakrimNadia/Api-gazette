import { Article } from "../models/article.model.js";

const articleController = {
  getAll: async (req, res) => {
    const articleList = await Article.findAll();
    res.json(articleList);
  },

  getById: async (req, res) => {
    const articleId = parseInt(req.params.id);

    if (!articleId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ error: "Article inconnu" });
    }
    res.json(article);
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
    const newArticle = {
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication: date_publication,
    };
    await Article.create(newArticle);
    res.status(201).json(newArticle);
  },

  update: async (req, res) => {
    const articleId = parseInt(req.params.id);

    if (!articleId) {
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

    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ error: "Article inconnu" });
    }

    const updateArticle = await Article.update({
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication: date_publication,
    });

    res.json(updateArticle);
  },

  delete: async (req, res) => {
    const articleId = parseInt(req.params.id);

    if (!articleId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ error: "article inconnue" });
    }

    await Article.destroy({
      where: { id: articleId },
    });

    res.status(200).json({ message: "Article supprimée avec succès" });
  },
};

export default articleController;
