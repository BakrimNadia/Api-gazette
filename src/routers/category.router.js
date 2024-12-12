import Router from 'express';
import categoryController from '../controllers/category.controller.js';

export const router = Router();

router.get('/category', categoryController.getAll);
router.get('/category/:id', categoryController.getById);
router.post('/category', categoryController.insert);
router.patch('/category/:id', categoryController.update);
router.delete('/category/:id', categoryController.delete);