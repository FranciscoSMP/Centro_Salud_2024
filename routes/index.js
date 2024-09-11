const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth'); // Autenticación para proteger rutas

// Ruta de la página principal
router.get('/', (req, res) => {
    res.render('welcome');
});

// Ruta del dashboard (protegida, solo accesible si se ha iniciado sesión)
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        user: req.user // Pasamos el usuario autenticado a la vista
    });
});

module.exports = router;
