// backend/config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'bedo',
  database: 'VueProject'
});

module.exports = pool.promise();
