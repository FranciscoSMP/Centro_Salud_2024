const express = require('express');
const router = express.Router();
const discapacidadController = require('../controllers/discapacidadController');

router.get('/add', discapacidadController.discapacidad);

router.get('/table', discapacidadController.getDiscapacidad);

router.post('/guardar/discapacidad', discapacidadController.addDiscapacidad);

router.post('/actualizar/discapacidad', discapacidadController.updateDiscapacidad);

router.get('/editar/:id', discapacidadController.getDiscapacidadById);

module.exports = router;
