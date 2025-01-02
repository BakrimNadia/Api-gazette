import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
import authMiddleware from '../middlewares/authMiddleware.js';

export const router = Router();

router.get('/users', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), userController.getAll);
router.get('/users/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), userController.getById);
router.patch('/users/:id', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), userController.update);
router.patch('/user/delete', authMiddleware, roleMiddleware (["Admin", "Rédacteur"]), userController.softDelete);