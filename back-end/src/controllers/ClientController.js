const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

     async create(request, response){ //Cadastrar um novo cliente
        const {name, sex, plan, tell, email, city} = request.body;
          const id = crypto.randomBytes(4).toString('HEX');

          await connection('clients').insert({
               name,
               city,
               id,
               plan,
               sex,
               tell,
               email
          }).catch(error=>{console.log('DEU RUIM -> ' + error)});


            return response.json({name, id, plan})
     },
     
     async index(request, response){ //Recuperar todos os clientes
          const clients = await connection('clients').select('*');

          return response.json(clients);



     },

     async delete(request, response){

          const { id } = request.params;

        const client = await connection('clients')
        .where('id', id)
        .select('*')
        .first(); //Quando retorna 1

          
          if(client.id != id){
               return response.status(401).json({error:"Operation not permitted!"})
          }

          await connection('clients')
          .where('id', id)
          .delete();

          return response.status(204).send();
     }
}