const crypto = require('crypto');


module.exports = {

     create(request, response){ //Cadastrar um novo cliente
        const {name, sex, cpf, plan, contact, email, city} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

            console.log(`
            Registered Successfully!
            
            Your name is: ${name}
            Your city is: ${city}
            Your ID: ${id}
            Your sex is: ${sex}
            Your cpf: ${cpf}
            Your plan: ${plan}
            Your tell: ${contact}s
            Your email: ${email}
            `)

            return response.json({name, id})
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
          const { id } = request.params;


          /*Função de buscar no BD e apagar o ID identico */
          response.status(204).send();
     }
}