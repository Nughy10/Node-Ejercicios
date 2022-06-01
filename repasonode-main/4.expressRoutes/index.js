const express = require('express'); //importamos express

const PORT = 5000;

const server = express(); //Creamos el servidor en express

server.use('/hola', (req, res, next) => {
    res.send("Hola")
})


server.use('/adios', (req, res, next) => {
    res.send("Adios")
})


server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});