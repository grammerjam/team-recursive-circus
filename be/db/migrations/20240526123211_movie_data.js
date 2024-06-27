/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("movies", (table) => {
      table.increments("movies_id").primary();
      table.string("title").notNullable();
      table.integer('year').unsigned().notNullable();
      table.string('category').notNullable();
      table.string('rating').notNullable();
      table.boolean('isTrending').defaultTo(false);
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movie_data');
  };

