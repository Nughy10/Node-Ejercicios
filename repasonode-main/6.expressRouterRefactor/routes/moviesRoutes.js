const express = require('express'); //importamos express

const moviesRoutes = express.Router(); 

moviesRoutes.get('/', (req, res) => {
    res.send('Estas son mis peliculas');
})

moviesRoutes.get('/movies', (req, res) => {
    const movies = ['Harry Potter', "El señor de los anillos"];
    res.send(movies)
})

module.exports = moviesRoutes;
