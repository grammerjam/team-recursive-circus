const express = require("express");
require("dotenv").config();

const app = express();
const routes = require("./routes/movies_routes"); // Ensure the path is correct

app.use("/api/movies", routes); // Use the correct path for the route

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

module.exports = app;
