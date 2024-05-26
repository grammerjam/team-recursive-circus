exports.up = function (knex) {
  return knex.schema
    .createTable("trending_images", (table) => {
      table.increments("id").primary();
      table
        .integer("media_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("movie_data")
        .onDelete("CASCADE");
      table.string("small").notNullable();
      table.string("large").notNullable();
    })
    .then(() => {
      return knex.schema.createTable("regular_images", (table) => {
        table.increments("id").primary();
        table
          .integer("media_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("movie_data")
          .onDelete("CASCADE");
        table.string("small").notNullable();
        table.string("medium").notNullable();
        table.string("large").notNullable();
      });
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("regular_images")
    .then(() => knex.schema.dropTableIfExists("trending_images"));
};
