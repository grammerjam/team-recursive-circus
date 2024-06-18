require("dotenv").config();

console.log()
module.exports = {
  development: {
    client: "mysql",
    connection: process.env.CONNECTION_URI,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};