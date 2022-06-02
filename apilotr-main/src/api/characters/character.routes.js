const express = require('express');
const { getAllCharacters, getCharacter, postNewCharacter, putCharacter, deleteCharacter } = require('./character.controller');

const CharacterRoutes = express.Router();


//Podemos usar la misma ruta para distintos metodos, tanto POST, PUT, DELETE, GET pueden usar la misma ruta dado que son metodos distintos
CharacterRoutes.get('/', getAllCharacters);
CharacterRoutes.get('/:id', getCharacter);
CharacterRoutes.post('/', postNewCharacter);
CharacterRoutes.put('/:id', putCharacter);
CharacterRoutes.delete('/:id', deleteCharacter);

module.exports = CharacterRoutes;