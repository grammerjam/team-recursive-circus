const knex = require("knex");
const knexFile = require("../knexfile.js");

const environment = process.env.NODE_ENV || "development";

console.log(`Using environment: ${environment}`); // Log the environment
console.log(`DB_HOST: ${process.env.DB_HOST}`); // Log the DB_HOST to ensure env vars are loaded

module.exports = knex(knexFile[environment]);
