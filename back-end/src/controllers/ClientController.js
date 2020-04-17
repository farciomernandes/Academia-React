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

     delete(request, response){
          const { id } = request.params;


          /*Função de buscar no BD e apagar o id identico */
          response.status(204).send();
     }
}