import { Router } from 'express';
import { router as newsRouter } from './news.router.js';
import { router as articleRouter } from './article.router.js';
import { router as announcementRouter } from './announcement.router.js';

export const router = Router();

router.use(newsRouter);
router.use(articleRouter);
router.use(announcementRouter);