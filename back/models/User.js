const db = require('../config/db');

const createUser = async (user) => {
  const [rows] = await db.execute(
    'INSERT INTO users (firstName, lastName, username, email, password, imageUrl) VALUES (?, ?, ?, ?, ?, ?)',
    [user.firstName, user.lastName, user.username, user.email, user.password, user.imageUrl]
  );
  return rows;
};

const getUserByUsername = async (username) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};

module.exports = {
  createUser,
  getUserByUsername,
};
