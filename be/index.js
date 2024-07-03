const express = require("express");
require("dotenv").config();

const app = express();
const routes = require("./routes/movies_routes");

app.use(express.json()); // Add this line to parse JSON requests

app.use("/api/movies", routes);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err.stack); // Log the error stack
  res.status(500).json({ error: err.message });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

module.exports = app;
