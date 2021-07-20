const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password :process.env.DB_PSWORD,
    database :process.env.DB_DATABASE,
    port: 3000,
});

db.connect();

module.exports = db;