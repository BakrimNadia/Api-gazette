import { Announcement } from "../models/announcement.model.js";

const announcementController = {
  getAll: async (req, res) => {
    const announcementList = await Announcement.findAll();
    res.json(announcementList);
  },

  getById: async (req, res) => {
    const announcementId = parseInt(req.params.id);

    if (!announcementId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const announcement = await Announcement.findByPk(announcementId);

    if (!announcement) {
      return res.status(404).json({ error: "annonce inconnu" });
    }
    res.json(announcement);
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
    const newAnnouncement = {
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication: date_publication,
    };
    await Announcement.create(newAnnouncement);
    res.status(201).json(newAnnouncement);
  },

  update: async (req, res) => {
    const announcementId = parseInt(req.params.id);

    if (!announcementId) {
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

    const announcement = await Announcement.findByPk(announcementId);

    if (!announcement) {
      return res.status(404).json({ error: "annonce inconnu" });
    }

    const updateAnnouncement = await Announcement.update({
      picture,
      title,
      subtitle,
      author,
      content,
      date_publication: date_publication,
    });

    res.json(updateAnnouncement);
  },

  delete: async (req, res) => {
    const announcementId = parseInt(req.params.id);

    if (!announcementId) {
      return res.status(404).json({ error: "id inconnu" });
    }

    const announcement = await Announcement.findByPk(newsId);

    if (!announcement) {
      return res.status(404).json({ error: "Annonce inconnue" });
    }

    await Announcement.destroy({
      where: { id: announcementId },
    });

    res.status(200).json({ message: "Annonce supprimée avec succès" });
  },
};

export default announcementController;