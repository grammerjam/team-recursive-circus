const request = require("supertest");
const app = require("../index"); // Update to the correct path
const db = require("../db/db.js");

describe("GET /api/movies", () => {
  afterAll(async () => {
    await db.destroy(); // Close the database connection after all tests
  });

  it("should retrieve a list of movies", async () => {
    const res = await request(app).get("/api/movies");
    console.log("Response:", res.body); // Log response for debugging

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    res.body.forEach((movie) => {
      expect(movie).toHaveProperty("id");
      expect(movie).toHaveProperty("title");
      expect(movie).toHaveProperty("year");
      expect(movie).toHaveProperty("category");
      expect(movie).toHaveProperty("rating");
      expect(movie).toHaveProperty("isBookmarked");
      expect(movie).toHaveProperty("isTrending");
      expect(movie).toHaveProperty("regular_images");
      expect(movie.regular_images).toHaveProperty("small");
      expect(movie.regular_images).toHaveProperty("medium");
      expect(movie.regular_images).toHaveProperty("large");
      expect(movie).toHaveProperty("trending_images");
      expect(movie.trending_images).toHaveProperty("small");
      expect(movie.trending_images).toHaveProperty("large");
    });
  });

  it("should return 500 if there is a server error", async () => {
    jest.spyOn(db, "select").mockImplementationOnce(() => {
      throw new Error("Server error");
    });

    const res = await request(app).get("/api/movies");
    console.log("Response:", res.body); // Log response for debugging

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty("error", "Server error");
  });
});
