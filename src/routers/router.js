import { Router } from 'express';
import { router as newsRouter } from './news.router.js';

export const router = Router();

router.use(newsRouter);