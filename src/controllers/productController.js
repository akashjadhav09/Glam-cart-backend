import { createProduct, getAllProducts, getProductById} from '../models/product.js';

export const getProducts = async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await getProductById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const addProduct = async (req, res) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('❌ Error creating product:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
