const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'your_db',
    password: 'your_pwd'
});  

module.exports = { dbConnection };
