exports.up = function(knex) {
    return knex.schema.createTable('bookmarked', function(table) {
      table.increments('Bookmarked').primary(); // Primary key
      table.integer('UserID').unsigned().notNullable(); // Foreign key to Users table
      table.integer('MovieID').unsigned().notNullable(); // Foreign key to Movies table
      table.timestamp('BookmarkedAt').defaultTo(knex.fn.now()); // Timestamp of when the bookmark was made
  
      // Setting up foreign keys
      table.foreign('UserID').references('users.users_id').onDelete('CASCADE');
      table.foreign('MovieID').references('movies.users_id').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('User_Movies'); // Rollback action to drop the table
  };