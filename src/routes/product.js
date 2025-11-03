import express from 'express';
import {
  getProducts,
  getProduct,
  addProduct
} from '../controllers/productController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Public
router.get('/', getProducts);
router.get('/:id', getProduct);

// Protected (requires token)
router.post('/', verifyToken, addProduct);

export default router;
