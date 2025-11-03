// src/server.js
import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import db from './db/index.js';

const { pool } = db;
const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ Database connection verified');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error('❌ DB connection failed', err);
    process.exit(1);
  }
})();
