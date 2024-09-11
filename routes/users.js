const express = require('express');
const router = express.Router();
const passport = require('passport');

// Ruta de login
router.get('/login', (req, res) => {
    const role = req.query.role || 'Digitador'; // Asignar "Digitador" como rol por defecto si no se selecciona
    res.render('login', { role });
});

// Ruta para manejar el inicio de sesión
router.post('/login', (req, res, next) => {
    const role = req.body.role; // Rol seleccionado
    passport.authenticate('local', {
        successRedirect: role === 'Admin' ? '/dashboard' : '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Ruta de dashboard (protección por rol)
router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('dashboard', { user: req.user });
    } else {
        req.flash('error_msg', 'Por favor, inicie sesión');
        res.redirect('/users/login');
    }
});

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err); // Manejo de errores
        }
        req.flash('success_msg', 'Has cerrado sesión');
        res.redirect('/users/login');
    });
});

module.exports = router;
