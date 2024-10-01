const express = require('express');
const router = express.Router();
const escolaridadController = require('../controllers/escolaridadController');

router.get('/add', escolaridadController.escolaridad);

router.get('/table', escolaridadController.getEscolaridad);

router.post('/guardar/escolaridad', escolaridadController.addEscolaridad);

router.post('/actualizar/escolaridad', escolaridadController.updateEscolaridad);

router.get('/editar/:id', escolaridadController.getEscolaridadById);

module.exports = router;