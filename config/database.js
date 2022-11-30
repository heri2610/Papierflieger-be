const dotenv = require('dotenv');

dotenv.config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const { MYSQLDATABASE, MYSQLHOST, MYSQLPASSWORD, MYSQLPORT, MYSQLUSER } =
  process.env;

const db = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: MYSQLUSER,
    password: MYSQLPASSWORD,
    database: MYSQLDATABASE,
    port: MYSQLPORT,
    host: MYSQLHOST,
    dialect: 'postgres',
  },
};
module.exports = db;
