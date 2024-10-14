import { Router } from 'express';
import announcementController from '../controllers/announcement.controller.js';

export const router = Router();

router.get('/announcement', announcementController.getAll);
router.get('/announcement/:id', announcementController.getById);
router.post('/announcement', announcementController.insert);
router.patch('/announcement/:id', announcementController.update);
router.delete('/announcement/:id', announcementController.delete);