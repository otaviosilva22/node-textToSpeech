//requires
const express = require('express');
const routes = require('./routes');
const bodyParser = require("body-parser");
const path = require('path');

//criando servidor
const server = express();

//utilizando bodyparser
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

//acesso público
server.use(express.static(__dirname + '/views'));
server.use(express.static(__dirname + '/public'));

//config engines
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/public'));

//utilizando rotas criadas
server.use(routes);

//rodando servidor...
server.listen(3333, ()=>{
    console.log("Server is running!");
})