require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    port: "3307",
    password: process.env.MYSQL_PASSWORD,
    database: "sleact",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    port: "3307",
    password: process.env.MYSQL_PASSWORD,
    database: "sleact",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    port: "3307",
    password: process.env.MYSQL_PASSWORD,
    database: "sleact",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
