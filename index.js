const express = require('express');
const app = express();
const port = 8080;

// Escuta todos os chamados e envia para as suas rotas respectivas
app.use('/', require("./src/routes.js"));

// Porta que estará ouvindo
app.listen(port);