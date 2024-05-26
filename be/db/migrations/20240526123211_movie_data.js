/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("movie_data", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.integer('year').unsigned().notNullable();
      table.string('category').notNullable();
      table.string('rating').notNullable();
      table.boolean('isBookmarked').defaultTo(false);
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

