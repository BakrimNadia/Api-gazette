import { Router } from 'express';
import announcementController from '../controllers/announcement.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

export const router = Router();

router.get('/announcement', announcementController.getAll);
router.get('/announcement/:id', announcementController.getById);
router.post('/announcement',  authMiddleware, roleMiddleware (["Admin", "Rédacteur","Employé"]), announcementController.insert);
router.patch('/announcement/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur","Employé"]), announcementController.update);
router.delete('/announcement/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur","Employé"]), announcementController.delete);