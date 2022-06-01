const express = require('express'); //importamos express

const seriesRoutes = express.Router(); 


seriesRoutes.get('/aaaa', (req, res) => {
    const series = ['Mr.Robot', "Mythic Quest"];
    res.send(series);
})

seriesRoutes.get('/', (req, res) => {
    res.send("Estoy en mis series");
})


module.exports = seriesRoutes;