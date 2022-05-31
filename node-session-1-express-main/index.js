const express = require('express');
const pokis = require('./pokemons.js');
const PORT = 4500;
const app = express();
const router = express.Router();

router.get('/alumnos', (req, res) => {
    const clase = ['Luis', 'Víctor', 'Pau', 'Carlos', 'Alejandro'];
    return res.send(clase);
});

router.get('/alumno/:id', (req, res) => {
    const clase = ['Luis', 'Víctor', 'Pau', 'Carlos', 'Alejandro'];
    console.log('REQ.PARAMS.ID', req.params.id);

    if (!clase[req.params.id]) {
        return res.send('El alumno no existe');
    } else {
        return res.send(clase[req.params.id]);
    }
});

router.get('/pokemons', (req, res) => {
    return res.send(pokis);
});

router.get('/pokemons/:pokemonId', (req, res) => {
    const pokemonId = req.params.pokemonId;

    if(!pokis[pokemonId]) {
        return res.send('No se encuentra ese pokemon por ID');
    }

    return res.send(pokis[pokemonId]);
});

router.get('/', (req, res) => {
    return res.send('Acabamos de crear una ruta para nuestra raiz');
});

app.use('/', router);
app.listen(PORT, () => {
    console.log(`Servidor a máxima potencia en http://localhost:${PORT}`);
});