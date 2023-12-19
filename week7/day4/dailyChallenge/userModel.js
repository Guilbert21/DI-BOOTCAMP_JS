const pool = require('./database.js');

const createUser = async (user) => {
  const { username, email, first_name, last_name, hashed_password } = user;
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const userResult = await client.query(
      'INSERT INTO users(username, email, first_name, last_name) VALUES($1, $2, $3, $4) RETURNING id',
      [username, email, first_name, last_name]
    );

    const userId = userResult.rows[0].id;

    await client.query('INSERT INTO hashpwd(username, password) VALUES($1, $2)', [username, hashed_password]);

    await client.query('COMMIT');
    return userId;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const getUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const updateUserById = async (id, user) => {
  const { email, first_name, last_name } = user;
  const result = await pool.query('UPDATE users SET email = $1, first_name = $2, last_name = $3 WHERE id = $4 RETURNING *', [email, first_name, last_name, id]);
  return result.rows[0];
};

module.exports = { createUser, getUserByUsername, getUserById, updateUserById };
