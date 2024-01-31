const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')
const typeDefs = require('../typeDefs/typeDefs.js');
const resolvers = require('../resolvers/resolvers.js');

class Server {

    constructor() {
        this.app = express();
        this.graphQLPath = '/graphql';
    
        //Middlewares
        this.middlewares();

        this.conectarMongoose();

        this.serverGraphQL =  new ApolloServer({ typeDefs, resolvers });
    }


    conectarMongoose() {
        mongoose.connect('mongodb://' + process.env.DB_URL + ':' + process.env.DB_PORT + '/' + process.env.DB_DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
        this.db.once('open', () => {console.log('Conexión exitosa a MongoDB');});
    }


    async start() {
        await this.serverGraphQL.start();
        this.applyGraphQLMiddleware();
        this.listen();
    }   

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    applyGraphQLMiddleware() {
        this.app.use(this.graphQLPath , express.json(), expressMiddleware(this.serverGraphQL));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.URL}:${process.env.PORT}${this.graphQLPath}`);
        })
        this.applyGraphQLMiddleware()
    }
}

module.exports = Server;



/*

Si queremos autenticar con Mongo:
En mongosh:

use admin
db.createUser(
  {
    user: "<nombreUsuario>",
    pwd: "<contraseña>",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

Y en NodeJS:
const mongoose = require('mongoose');

const url = "mongodb://<nombreUsuario>:<contraseña>@localhost:27017/ejemplo";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


*/