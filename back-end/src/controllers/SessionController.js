const connection = require('../database/connection');

module.exports = {
    async client(request, response){
        const { id } = request.body;

        const client = await connection('clients')
        .where('id', id)
        .select('name')
        .first();
            
            if( !client ){
                return response.status(400).json({error: 'No Client found with this ID'});
            }
            response.json(client);
    },
    
    async office(request, response){
        const {id} = request.body;
        const office = await connection('offices')
        .where('id', id)
        .select('name')
        .first();
        if( !office ){
            return response.status(400).json({error: 'No Office found with this ID'});
        }
        response.json(office);

    }
}