const express = require('express');
const connection = require('../database/connection');


module.exports = {
    async create(request, response) {
        const { monday, tuesday, fourth, fifth, friday, saturday } = request.body;
        const {client_id} = request.params;

        console.log(client_id)
        await connection('training').insert({
            monday, 
            tuesday, 
            fourth, 
            fifth, 
            friday, 
            saturday,
            client_id
        }).catch(error => {console.log('DEU RUIM -> ' + error)});
                
        
        return response.json("FIM, CLIENT_ID: " + client_id);
    },

    async index(request, response) { //Retorna apenas 1 treino
        const client_id = request.headers.authorization;

        const trainings = await connection('training')
        .where('client_id', client_id)// ' where '  Quero um ID do banco que seja igual ao que mandei por segundo
        .join('clients', 'clients.id', '=', 'training.client_id')
        .select([
            'training.*',
            'clients.name',
            'clients.sex',
            'clients.city',
            'clients.email',
            'clients.tell',
            'clients.id',
        ])
        .catch(error => { console.log("DEU RUIM = " + error)});
        
       
        return response.json(trainings);

    },

     async delete(request, response){
        const { client_id } = request.params;
        const id = request.headers.authorization; //Cliente logado

        const atraining = await connection('training')
        .where('client_id', client_id)
        .select('client_id')
        .first(); //Quando retorna 1

        if( atraining.client_id != id){
            return response.status(401).json({error: "Operation not permitted!"}); //Não autorizado
        }

        await connection('training')
        .where('client_id', client_id)
        .delete();

        return response.status(204).send(); //204, quando tem sucesso mas sem recurso para retornar
    }
}