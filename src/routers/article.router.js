import { Router } from 'express';
import articleController from '../controllers/article.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

export const router = Router();

router.get('/article', articleController.getAll);
router.get('/article/:id', articleController.getById);
router.post('/article',  authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), articleController.insert);
router.patch('/article/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), articleController.update);
router.delete('/article/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), articleController.delete);