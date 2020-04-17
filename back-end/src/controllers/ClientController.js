const connection = require('../database/connection');

module.exports = {

     async create(request, response){ //Cadastrar um novo cliente
        const {name, sex, cpf, plan, tell, email, city} = request.body;


          await connection('clients').insert({
               name,
               city,
               cpf,
               plan,
               sex,
               tell,
               email
          }).catch(error=>{console.log('DEU RUIM' + error)});


            return response.json({name, cpf, plan})
     },
     
     index(request, response){ //Recuperar todos os clientes
          const clientes = [{
               nome: "Marcio Fernandes",
               cpf: "071-540-655-123"
          },{
               nome:"Caim Gonçalves",
               cpf: "091-098-123-22"
          }]
          return response.json(clientes)
     },

     delete(request, response){
          const { cpf } = request.params;


          /*Função de buscar no BD e apagar o cpf identico */
          response.status(204).send();
     }
}