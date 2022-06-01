const mongoose = require('mongoose');
const Character = require('../models/Character');
const {DB_URL} = require('../db/database');

const characters = [
  {
    name: "Ursula Corberó",
    age: 32,
    alias: "Tokio",
    beauty: true,
    email: "ursula@corbero.com",
  },
  {
    name: "Pedro Alonso",
    age: 50,
    alias: "Berlín",
    beauty: false,
    email: "pedro@alonso.com",
  },
  {
    name: "Álvaro Morte",
    age: 46,
    alias: "Profesor",
    beauty: true,
    email: "alvaro@morte.com",
  },
  {
    name: "Alba Flores",
    age: 34,
    alias: "Nairobi",
    beauty: true,
    email: "alba@flores.com",
  },
  {
    name: "Jaime Lorente",
    age: 29,
    alias: "Denver",
    beauty: true,
    email: "jaime@lorente.com",
  },
  {
    name: "Darko Peric",
    age: 44,
    alias: "Helsinki",
    beauty: false,
    email: "darko@peric.com",
  },
];

/**
 * 1. Comprobar si la colección Characters tiene datos.
 * Si tiene datos los borro.
 * Si no tiene datos, no hago nada.
 * 
 * 2. Guardar los nuevos datos.
 */

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
      console.log('Ejecutando seed...');
      const characters = await Character.find();
      
      if (characters.length) {
        console.log('Eliminando colección...');
        await Character.collection.drop();
      } else {
        console.log('No hay personajes en la base de datos... procediendo a añadir los nuevos');
      }
  })
  .catch(error => console.log('Error al borrar base de datos', error))
  .then(async() => {
    await Character.insertMany(characters)
    console.log('Personajes añadidos con éxito');
  })
  .catch(error => console.log('Error al insertar los personajes', error))
  .finally(() => mongoose.disconnect())
