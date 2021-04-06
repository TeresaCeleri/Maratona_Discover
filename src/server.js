// express é uma biblioteca para criar o servidor
const express = require('express');

const server = express();
const routes = require('./routes');

// vai usar o motor do ejs, ou seja, renderizar
// usando template engine
server.set('view engine', 'ejs');

// habilitar arquivos estaticos
server.use(express.static('public'));

// liberando para usar usar req.body
server.use(express.urlencoded({ extended: true }));

// routes
server.use(routes);

server.listen(3005, () => console.log('rodando'));
