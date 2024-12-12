import { Router } from 'express';
import { router as newsRouter } from './news.router.js';
import { router as articleRouter } from './article.router.js';
import { router as announcementRouter } from './announcement.router.js';
import { router as authRouter } from './auth.router.js';
import { router as userRouter } from './user.router.js';
import { router as categoryRouter } from './category.router.js';

export const router = Router();

router.use(newsRouter);
router.use(articleRouter);
router.use(announcementRouter);
router.use(authRouter);
router.use(userRouter);
router.use(categoryRouter);