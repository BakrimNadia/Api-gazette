import { Announcement } from "../models/announcement.model.js";
import { Category } from "../models/category.model.js";
import '../models/associations.js';

const announcementController = {
  getAll: async (req, res) => {
    try {
    const announcementList = await Announcement.findAll(
      {
        include: [{
          model: Category,
          as: 'category',
          attributes: ['id','name'], 
        }]
      }
    );
    res.json(announcementList);
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
  },

  getById: async (req, res) => {
    const announcementId = parseInt(req.params.id);

    if (!announcementId) {
      return res.status(404).json({ error: "id inconnu" });
    }
    try {
    const announcement = await Announcement.findByPk(announcementId, {
      include: [{
        model: Category,
        as: 'category',
        attributes: ['id','name'],
      }]
    }
    );
    if (!announcement) {
      return res.status(404).json({ error: "annonce inconnu" });
    }
    res.json(announcement);
  
    } catch (error) {
  console.error("Erreur lors de la récupération de l'annonce :", error);
  res.status(500).json({ error: "Erreur serveur" });
}
},


  insert: async (req, res) => {
    const {
      picture,
      title,
      price,
      author,
      content,
      date_publication,
      category_id,
    } = req.body;
    if (
      !title ||
      !price ||
      !author ||
      !content ||
      !date_publication ||
      !category_id
    ) {
      console.log("Tous les champs sont obligatoire");
      return res
        .status(400)
        .json({ error: "Tous les champs sont obligatoire" });
    }
    try {
    const newAnnouncement = {
      picture,
      title,
      price,
      author,
      content,
      date_publication: date_publication,
      category_id,
    };
    await Announcement.create(newAnnouncement);
    res.status(201).json(newAnnouncement);
  } catch (error) {
    console.error("Erreur lors de l'insertion de l'annonce :", error);
    res.status(500).json({ error: "Erreur serveur" });
    }
  },

  update: async (req, res) => {
    const announcementId = parseInt(req.params.id);

    if (!announcementId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const {
      picture,
      title,
      price,
      author,
      content,
      date_publication,
      category_id,
    } = req.body;

    try {
    const announcement = await Announcement.findByPk(announcementId);

    if (!announcement) {
      return res.status(404).json({ error: "annonce inconnu" });
    }

    const updateAnnouncement = await Announcement.update({
      picture,
      title,
      price,
      author,
      content,
      date_publication: date_publication,
      category_id,
    });

    res.json(updateAnnouncement);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'annonce :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
  },

  delete: async (req, res) => {
    const announcementId = parseInt(req.params.id);

    if (!announcementId) {
      return res.status(404).json({ error: "id inconnu" });
    }
    try {
    const announcement = await Announcement.findByPk(newsId);

    if (!announcement) {
      return res.status(404).json({ error: "Annonce inconnue" });
    }

    await Announcement.destroy({
      where: { id: announcementId },
    });

    res.status(200).json({ message: "Annonce supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'annonce :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
  },
};

export default announcementController;