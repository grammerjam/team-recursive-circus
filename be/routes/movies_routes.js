const express = require("express");
const router = express.Router();
const db = require("../db/db.js");

router.get("/", async (req, res, next) => {
  try {
    console.log("GET /api/movies hit"); // Log when the route is hit
    const movies = await db("movie_data")
      .select(
        "movie_data.*",
        db.raw(`
          JSON_OBJECT(
            'small', regular_images.small,
            'medium', regular_images.medium,
            'large', regular_images.large
          ) as regular_images
        `),
        db.raw(`
          JSON_OBJECT(
            'small', trending_images.small,
            'large', trending_images.large
          ) as trending_images
        `)
      )
      .leftJoin("regular_images", "movie_data.id", "regular_images.media_id")
      .leftJoin("trending_images", "movie_data.id", "trending_images.media_id")
      .groupBy(
        "movie_data.id",
        "regular_images.small",
        "regular_images.medium",
        "regular_images.large",
        "trending_images.small",
        "trending_images.large"
      );

    console.log("Movies retrieved:", movies); // Log retrieved movies

    const formattedMovies = movies.map((movie) => ({
      ...movie,
      regular_images: JSON.parse(movie.regular_images || "{}"),
      trending_images: JSON.parse(movie.trending_images || "{}"),
    }));

    res.json(formattedMovies);
  } catch (err) {
    console.error("Error fetching movies:", err); // Log the error
    next(err); // Forward error to the error-handling middleware
  }
});

module.exports = router;
