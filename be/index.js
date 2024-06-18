const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;
const routes = require('./routes/movies_routes');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}/`);
});