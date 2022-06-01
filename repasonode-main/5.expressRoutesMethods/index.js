const express = require('express'); //importamos express

const PORT = 5000;

const server = express(); //Creamos el servidor en express

//CRUD --> Create, Read, Update, Delete

//CREATE --> POST --> Envía info al servidor y crea nuevos elementos en BBDD
//READ --> GET --> Obtienes información de la BBDD
//UPDATE --> PUTCH, PATCH --> Envía información a la BBDD y edita o actualiza el elemento de la BBDD
//DELETE --> DELETE --> Elimina un elemento de la BBDD

const misRutas = express.Router(); //Creamos un enrutador de express para mis rutas
const misRutas2 = express.Router(); //Creamos un enrutador de express para mis rutas

misRutas.get('/', (req, res) => {
    res.send('Hola a todos');
})

misRutas.get('/movies', (req, res) => {
    const movies = ['Harry Potter', "El señor de los anillos"];
    res.send(movies)
})

misRutas2.get('/aaaa', (req, res) => {
    const series = ['Mr.Robot', "Mythic Quest"];
    res.send(series);
})

misRutas2.get('/', (req, res) => {
    res.send("Estoy en mis series");
})

server.use('/', misRutas); //Asigna a la ruta, las rutas que hemos generado antes
server.use('/misseries', misRutas2); //Asigna a la ruta, las rutas que hemos generado antes


/**
 * server use asigna una ruta a un conjunto de rutas generado con el  express.Router()
 * a misRutas le asigno la ruta /, entonces para localhost/ pinta 'Hola a todos' y para localhost/movies pinta las movies
 * a misRutas2 le asigno la ruta /misseries, entonces para localhost/misseries/ pinta 'estoy en mis series', y en localhost/misseries/aaaa pinta las series
*/

server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});