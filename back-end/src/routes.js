const express = require('express');
const ClientController = require('./controllers/ClientController');
const SessionController = require('./controllers/SessionController');
const OfficeController = require('./controllers/OfficeController');
const PlansController = require('./controllers/PlansController');

const routes = express.Router()


routes.post('/sessions', SessionController.create);


routes.get('/client', ClientController.index)
routes.post('/client', ClientController.create);
routes.delete('/client/:cpf', ClientController.delete);


routes.get('/office', OfficeController.index);
routes.post('/office', OfficeController.create);
routes.delete('/office/:cpf', OfficeController.delete);

routes.get('/plans', PlansController.index);



module.exports = routes;