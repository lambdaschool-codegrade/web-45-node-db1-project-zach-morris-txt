//Imports
const express = require("express");
const accountsRouter = require('./accounts/accounts-router')


//Instance Of Express App
const server = express();


//Calling Middleware
server.use(express.json());


//Consuming Router
server.use('/api/accounts', accountsRouter)


//Exports; Exposing
module.exports = server;
