
module.exports = {
    create(request, response){
        const { id } = request.body;
        /*Colocar função que buscar no DB
        um cliente com o id adquirido*/
        response.json("Deu certo bro!");
    }
}