const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password :'wltn3817@',
    database :'my_db',

});

db.connect();

module.exports = db;