import { Router } from 'express';
import newsController from '../controllers/news.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

export const router = Router();

router.get('/news', newsController.getAll);
router.get('/news/:id', newsController.getById);
router.post('/news',  authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), newsController.insert);
router.patch('/news/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), newsController.update);
router.delete('/news/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), newsController.delete);