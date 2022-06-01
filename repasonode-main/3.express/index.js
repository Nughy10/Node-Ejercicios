const express = require('express'); //importamos express

const PORT = 5000;

const server = express(); //Creamos el servidor en express

server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});