import { Router } from 'express';
import newsController from '../controllers/news.controller.js';

export const router = Router();

router.get('/news', newsController.getAll);
router.get('/news/:id', newsController.getById);
router.post('/news', newsController.insert);
router.patch('/news/:id', newsController.update);
router.delete('/news/:id', newsController.delete);