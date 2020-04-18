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
    async delete(request, response){
        
        const { id } = request.params;

        const office = await connection('offices')
        .where('id', id)
        .select('id')
        .first(); //Quando retorna 1
        console.log('encontrou')
        console.log(office.name)
        if( office.id != id){
            return response.status(401).json({error: "Operation not permitted!"}); //Não autorizado
        }

        await connection('offices')
        .where('id', id)
        .delete();
        console.log('APAGOU MANO')
        return response.status(204).send(); //204, quando tem sucesso mas sem recurso para retornar
    }
}