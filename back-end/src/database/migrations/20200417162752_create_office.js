
exports.up = function(knex) {
  knex.schema.createTable('offices', function(table){
     table.string('cpf').notNullable();
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
  knex.schema.dropTable('offices');
};
