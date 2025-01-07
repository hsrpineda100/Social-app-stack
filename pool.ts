
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'db.efudaswvumnfujixqrku.supabase.co',
  port: 6543,
  database: process.env.POSTGRES_DATABASE || 'postgres',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  ssl: true,
  pool_mode: 'transaction'
});

module.exports = pool;
