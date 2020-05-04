const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

    async create(request, response){
        const { name, office, sex, salary, city, email, contact } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');


        await connection('offices').insert({
            id,
            name,
            office,
            sex,
            city,
            email,
            contact,
            salary
        }).catch(error =>{ console.log('DEU RUIM -> ' + error)});

         return response.json({name, id})


    },

    async index(request, response){



        const allOffice = await connection('offices')
        .select('*');
        

        return response.json(allOffice);
    },
    async delete(request, response){
        
        const { id } = request.params;

        const office = await connection('offices')
        .where('id', id)
        .select('*')
        .first()
        .catch(erro => console.log('erro = ' + erro)); //Quando retorna 1

        if( office.id != id)
            return response.status(401).json({error: "Operation not permitted!"}); //Não autorizado
        

        await connection('offices')
        .where('id', id)
        .delete();
        return response.status(204).send(); //204, quando tem sucesso mas sem recurso para retornar
    }
}