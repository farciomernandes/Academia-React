const express = require('express');
const connection = require('../database/connection');


module.exports = {
    async create(request, response) {
        const { monday, tuesday, fourth, fifth, friday, saturday } = request.body;
        const client_id = request.headers.authorization;

        const [id] = await connection('training').insert({
            monday, 
            tuesday, 
            fourth, 
            fifth, 
            friday, 
            saturday,
            client_id
        }).catch(error => {console.log('DEU RUIM -> ' + error)});

        return response.json({ id });
    }
    /*async index(request, response) {
        const id = request.headers.authorization;

        const trainings = await connection('training').select('id');
        return response.json(trainings);
    }*/
}