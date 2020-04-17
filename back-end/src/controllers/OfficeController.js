

module.exports = {

    create(request, response){
        const { name, cpf, office, sex, salary, city, email, contact } = request.body;
        /*Função para salvar no banco de dados*/
        console.log(`
        Registered Successfully!
        
        Your name is: ${name}
        Your office: ${office}
        Your salary: ${salary}
        Your city: ${city}
        Your sex is: ${sex}
        Your cpf: ${cpf}
        Your tell: ${contact}
        Your email: ${email}
        `)
        response.json("Funcionário Cadastrado!");
    },

    index(request, response){
        /*Função para listar todos os funcionários do BD*/

        
        response.json([{
            name: "Marcio Fernandes",
            cpf: "071-540-653-11",
            office: "Instructor",
            salary: 700,
            city: "Aurora"
        }, {
            name: "Caim Gonçalves",
            cpf: "087-123-849-22",
            office: "Personal",
            salary: 1200
        }])
    },
    delete(request, response){
        const { id } = request.params;


        /*Função de buscar no BD e apagar o ID identico */
        response.status(204).send();
    }
}