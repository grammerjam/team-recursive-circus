const express = require("express");
const router = express.Router();
const db = require("../db/db.js");

router.get("/movies", async (req, res) => {
    try {
      const movies = await db("movie_data");
      res.json(movies);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });

  module.exports = router;
