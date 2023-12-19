const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'userDB',
  password: 'guilly',
  port: 5432,
});

module.exports = pool;
