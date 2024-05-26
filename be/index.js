const express = require("express");
const db = require("./db/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  db.select("*")
    .from("movie_data")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;
// const bookRouter = require("./routes/bookStore.js");

// process.on('uncaughtException', function (err) {
//     console.log(err);
// }); 

// app.use("/api", bookRouter);

// app.use(express.json());

// app.listen(port, () => {
//   console.log(`App listening on port: ${port}`);
// });