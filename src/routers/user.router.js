import { Router } from 'express';
import userController from '../controllers/user.controller.js';

export const router = Router();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.patch('/users/patch', userController.update);
router.patch('/user/delete', userController.softDelete);