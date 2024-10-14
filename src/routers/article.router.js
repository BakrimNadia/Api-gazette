import { Router } from 'express';
import articleController from '../controllers/article.controller.js';

export const router = Router();

router.get('/article', articleController.getAll);
router.get('/news/:id', articleController.getById);
router.post('/news', articleController.insert);
router.patch('/news/:id', articleController.update);
router.delete('/news/:id', articleController.delete);