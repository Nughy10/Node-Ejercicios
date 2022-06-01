const express = require('express'); //importamos express
const Movie = require('../models/movie.model'); //importo mi modelo de Movie

const moviesRoutes = express.Router(); 

moviesRoutes.get('/', async (req, res) => {
    const movies = await Movie.find(); //recupero mis peliculas
    res.send(movies);
})


moviesRoutes.get('/:id', async (req, res) => {
    const id = req.params.id;
    const movies = await Movie.findById(id); //recupero mis peliculas
    res.send(movies);
})



module.exports = moviesRoutes;
