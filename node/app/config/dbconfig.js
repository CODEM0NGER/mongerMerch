const mysql = require('mysql2')

const pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'K!llm0ng3r',
    database: 'monger_store'
})

module.exports = pool

//I've done this before but this is a basic template of how this file should look//