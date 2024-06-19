const knex = require("knex");
const knexFile = require("../knexfile.js");

const environment = "development";

module.exports = knex(knexFile[environment]);
