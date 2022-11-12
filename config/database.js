const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const db = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "mysql",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "mysql",
  },
};
module.exports = db;
