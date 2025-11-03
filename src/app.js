// src/app.js
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('🚀 E-commerce backend running successfully!');
});

export default app;
