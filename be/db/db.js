const knex = require("knex");
const knexFile = require("../knexfile.js");

// const db = knex(config.development); // Use the development configuration from knexfile.js

// module.exports = db;

const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexFile[environment]);
