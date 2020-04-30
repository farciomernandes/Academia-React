const express = require('express');
const ClientController = require('./controllers/ClientController');
const SessionController = require('./controllers/SessionController');
const OfficeController = require('./controllers/OfficeController');
const TrainingController = require('./controllers/TrainingController');

const routes = express.Router()


routes.post('/sessions', SessionController.client);
routes.post('/sessionsOffice', SessionController.office);


routes.get('/client', ClientController.index)
routes.post('/client', ClientController.create);
routes.delete('/client/:id', ClientController.delete);


routes.get('/office', OfficeController.index);
routes.post('/office', OfficeController.create);
routes.delete('/office/:id', OfficeController.delete);

routes.post('/training/:client_id', TrainingController.create);
routes.get('/training/:client_id', TrainingController.index);
routes.delete('/training/:client_id', TrainingController.delete);




module.exports = routes;