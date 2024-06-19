require("dotenv").config();

console.log();
module.exports = {
  development: {
    client: "mysql",
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
