
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary(); // Auto-incrementing ID column
      table.string('username').notNullable().unique(); // Username column
      table.string('password').notNullable(); // Password 
      table.string('firstName').notNullable(); // First name column
      table.string('lastName').notNullable(); // Last name column
      table.string('email').notNullable().unique();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
