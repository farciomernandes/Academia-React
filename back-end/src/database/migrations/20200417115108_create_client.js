
exports.up = function(knex) {
 return knex.schema.createTable('clients', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('city').notNullable();
      table.string('sex').notNullable();
      table.int('plan').notNullable();
      table.int('tell').notNullable();
      table.string('email').notNullable();
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};
