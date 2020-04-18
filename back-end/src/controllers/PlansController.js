const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const {id} = request.params;
        const client_id = request.headers.authorization;

        const client = await connection('clients')
        .where('id', id)
        .select('*')
        .first()
        .catch(error => console.log('DEU RUIM -> ' +error));
        
        if( client.id = client_id ){
            if(client.plan = 1){
                //Preencher de forma correta depois
                return response.json('Musculação de Segunda a sexta! ');
    
            }
            
            else if( client.plan = 2){
                //Preencher de forma correta depois
                return response.json('Musculação e Ginástica, segunda a sabádo! ');
            }
            
            else if( client.plan != 3){
                //Deu erro, deixa assim
                return response.status(404).send(); 
            }
    
            //Preencher de forma correta depois
            return response.json(`Buguês, plano mais caro:
            Tem direito a musculação, ginãstica e muay-thai!`);
        }
            return response.status(404).send(); 
    }
}