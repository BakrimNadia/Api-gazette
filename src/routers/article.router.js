import { Router } from 'express';
import articleController from '../controllers/article.controller.js';

export const router = Router();

router.get('/article', articleController.getAll);
router.get('/article/:id', articleController.getById);
router.post('/article', articleController.insert);
router.patch('/article/:id', articleController.update);
router.delete('/article/:id', articleController.delete);