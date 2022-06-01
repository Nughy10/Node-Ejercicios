const express = require('express');

const dotenv = require('dotenv'); //Importamos dotenv para acceder a las variables de entorno de nuestro .env

dotenv.config(); //Con la llama a la función config obtenemos las variables de nuestro archivo .env

const {connect} = require('./db/database');

const movieRoutes = require('./routes/movie.routes');


//Recuperamos la varibale de dotenv con process.env.NOMBRE_VARIABLE
const PORT = process.env.PORT || 5000;

const server = express();
connect();

server.use('/', movieRoutes);

server.listen(PORT, () => {
    console.log(`Server runing in http://localhost:${PORT}`);
})