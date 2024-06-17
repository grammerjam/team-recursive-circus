const express = require("express");
const db = require("./db/db");
require("dotenv").config();

const app = express();
const port = process.env.MYSQL_ADDON_PORT || 3000;
const routes = require('./routes/movies_routes');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}/`);
});