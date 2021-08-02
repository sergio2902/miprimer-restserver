const express = require('express');
const cors = require('cors');
require('dotenv').config();
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/popo/usuarios'

        // middlewares
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());
        //directoria publico
        this.app.use(express.static('public'));
    }
    routes() {
        //lo que vamos a poner es un middleware condicional
        this.app.use(this.usuariosPath, require('../routes/usuario'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}


module.exports = Server;