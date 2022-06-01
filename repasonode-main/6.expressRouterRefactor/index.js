const express = require('express'); //importamos express
const moviesRoutes = require('./routes/moviesRoutes')
const seriesRoutes = require('./routes/seriesRoutes')
const PORT = 5000;

const server = express(); //Creamos el servidor en express




server.use('/', moviesRoutes); //Asigna a la ruta, las rutas que hemos generado antes
server.use('/pepito', seriesRoutes); //Asigna a la ruta, las rutas que hemos generado antes


server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});