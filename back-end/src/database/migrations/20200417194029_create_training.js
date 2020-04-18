
exports.up = function(knex) {
    return knex.schema.createTable('training', function(table){
        table.string('monday');
        table.string('tuesday');
        table.string('fourth');
        table.string('fifth')
        table.string('friday');
        table.string('saturday');


        //Relacionamento, quem tem esse treino é alguem com ID
        table.string('client_id').notNullable();

        //Chave estrangeira; Para onde o relacionamento deve olhar?

        table.foreign('client_id').references('id').inTable('clients');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('training');
};
