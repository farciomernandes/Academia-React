
exports.up = function(knex) {
  knex.schema.createTable('clients', function(table){
      table.string('cpf').notNullable();
      table.string('name').notNullable();
      table.string('city').notNullable();
      table.string('sex').notNullable();
      table.int('plan').notNullable();
      table.int('tell').notNullable();
      table.string('email').notNullable();
  })

};

exports.down = function(knex) {
  knex.schema.dropTable('clients');
};
