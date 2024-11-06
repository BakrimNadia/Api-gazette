import { Router } from 'express';
import userController from '../controllers/user.controller.js';

export const router = Router();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users/patch', userController.update);
router.post('/user/delete', userController.softDelete);