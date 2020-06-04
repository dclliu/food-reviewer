const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    connectionLimit: 10
  });
/*
  // open the MySQL connection
  connection.connect(error => {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
      }
    console.log("Successfully connected to the database.");
  });
  */

 connection.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }
  if (connection) connection.release()
  return
})

  module.exports = connection;