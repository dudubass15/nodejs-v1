const express = require('express');
const routes = express.Router();

// Controllers app
const HomeController = require('./controlles/homeController');

// Rotas app
routes.get('/', HomeController.index);
routes.get('/view', HomeController.view);

// Exporta as rotas para o arquivo index.js
module.exports = routes;