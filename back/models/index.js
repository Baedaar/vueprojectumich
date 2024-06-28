// back/models/index.js
const db = require('../config/db');
const User = require('./User');

module.exports = {
  db,
  User,
};
