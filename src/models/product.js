import db from '../db/index.js';

export const getAllProducts = async () => {
  const result = await db.query('SELECT * FROM products ORDER BY created_at DESC');
  return result.rows;
};

export const getProductById = async (id) => {
  const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  return result.rows[0];
};

export const createProduct = async (data) => {
  const {
    title,
    description,
    category,
    price,
    discount_percentage,
    rating,
    stock,
    tags,
    brand,
    sku,
    weight,
    dimensions,
    warranty_information,
    shipping_information,
    availability_status,
    return_policy,
    minimum_order_quantity,
    meta,
    images,
    thumbnail
  } = data;

  const result = await db.query(
    `INSERT INTO products (
      title, description, category, price, discount_percentage, rating, stock, tags,
      brand, sku, weight, dimensions, warranty_information, shipping_information,
      availability_status, return_policy, minimum_order_quantity, meta, images, thumbnail
    ) VALUES (
      $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20
    ) RETURNING *`,
    [
      title, description, category, price, discount_percentage, rating, stock, tags,
      brand, sku, weight, dimensions, warranty_information, shipping_information,
      availability_status, return_policy, minimum_order_quantity, meta, images, thumbnail
    ]
  );

  return result.rows[0];
};
