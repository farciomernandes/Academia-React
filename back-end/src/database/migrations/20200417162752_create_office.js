
exports.up = function(knex) {
  return knex.schema.createTable('offices', function(table){
     table.string('id').primary();
     table.string('name').notNullable();
     table.string('office').notNullable();
     table.string('sex').notNullable();
     table.decimal('salary').notNullable();
     table.string('city').notNullable();
     table.string('email').notNullable();
     table.string('contact').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('offices');
};
