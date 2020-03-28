const express = require('express');
const routes = express.Router();

// Controllers
const OngController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// ONG
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

// Incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// Profile
routes.get('/profile', ProfileController.index);

// Session
routes.post('/sessions', SessionController.create);

module.exports = routes;