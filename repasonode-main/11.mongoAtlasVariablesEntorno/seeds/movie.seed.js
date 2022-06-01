const mongoose = require('mongoose');

const Movie = require('../models/movie.model');

const movies = [
    {
      title: "Star Wars 223123123",
      year: 1977,
      poster:
        "https://i.etsystatic.com/14140434/r/il/a66d02/1502637303/il_fullxfull.1502637303_mnu2.jpg",
    },
    {
      title: "Top Gun",
      poster: "https://m.media-amazon.com/images/I/616OBt164PL._AC_SY741_.jpg",
    },
    {
      title: "Desafio Total",
      year: 1990,
      poster: "https://image.posterlounge.es/images/big/1875920.jpg"
    },
  ];


const movieDocuments = movies.map((movie) => new Movie(movie));

mongoose.connect("mongodb+srv://root:root@cluster0.lcaox.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(async () => {
    //Con el metodo find obtenemos todas las peliculas de mi colección
    const allMovies = await Movie.find();

    //Si tengo alguna pelicula borro mi colección para insertar todas las nuevas y que no haya elementos repetidos
    if(allMovies.length ){
        await Movie.collection.drop();
        console.log("movies db deleted")
    }
}).catch((error) => {
    console.log(`Error deleting movies ${error}`)
}).then(async () =>{
    //cuando hemos comprobado que no hay peliculas insertamos las que tenemos en movieDocuments
    await Movie.insertMany(movieDocuments);
    console.log("movies db created")
}).catch((error) => {
    console.log(`Error creating movies ${error}`)
}).finally(()=> mongoose.disconnect()); //por ultimo nos desconectamos de la BBDD