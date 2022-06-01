const mongoose = require('mongoose'); //Importamos mongoose

//importamos los esquemas de mongoose
const Schema = mongoose.Schema;


//Definimos el Schema de una pelicula
const movieSchema = new Schema({
    title: {type: String, required: true},    //si un campo es requerido, cuando creamos el objeto tiene que estar definido
    year: {type: Number, required: false},    //si un campo no es requerido, cuando creamos el objeto no necesita estar definido
    poster: {type: String, required: false}, 
},{
    timestamps: true        //Timestamps sirve para crear dentro del objeto propiedades de fecha de creacion y actualizacion
})

//Movie es el nombre de mi modelo, que pertenece a la colección movies con el esquema movieSchema
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;