const mysql = require("mysql");
const util = require("util");
const dotenv = require("dotenv").config();

console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

pool.query = util.promisify(pool.query);

function queryPool(tableName, sql, params) {
  const query = sql.replace("$TABLE_NAME$", tableName);
  
  return pool.query(query, params);
}

module.exports = { queryPool, pool };
