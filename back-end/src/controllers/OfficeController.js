const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

    async create(request, response){
        const { name, office, sex, salary, city, email, contact } = request.body;
        /*Função para salvar no banco de dados*/

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('offices').insert({
            name,
            id,
            office,
            sex,
            salary,
            city,
            email,
            contact
        }).catch(error =>{ console.log('DEU RUIM -> ' + error)});


        response.json(`Funcionário Cadastrado
            ${name}
            ${office}
            ${salary}
            ${city}`);
    },

    async index(request, response){
        /*Função para listar todos os funcionários do BD*/
        const allOffice = await connection('offices').select('*');
        
        return response.json(allOffice);
    },
    delete(request, response){
        const { id } = request.params;
        

        /*Função de buscar no BD e apagar o ID identico */
        response.status(204).send();
    }
}