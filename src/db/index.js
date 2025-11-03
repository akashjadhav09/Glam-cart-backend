// src/db/index.js
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL');
});

const db = {
  pool,
  query: (text, params) => pool.query(text, params),
};

export default db;
