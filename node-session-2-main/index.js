const express = require('express');
const db = require('./db/database');
db.connect();
const indexRoutes = require('./routes/index.routes');
const characterRoutes = require('./routes/characters.routes');
const app = express();
const PORT = 4500;

app.use('/characters', characterRoutes);
app.use('/', indexRoutes);

// Cuando no se encuentra una ruta, entra aquí
app.use('*', (req, res, next) => {
    const error = new Error('Ruta no encontrada, busca en otro lado');
    error.status = 404;
    // return next(error);
});

// Capturador de errores.
// Cualquier error de mi aplicación pasará por esta función.
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Unexpected error';

    return res.status(status).json(message);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});



/**
 * 2. punto para Mar
 * 1. Punto para Mireia
 * 1. Punto para Sara
 */