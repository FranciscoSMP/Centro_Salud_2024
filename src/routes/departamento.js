const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamentoController');

router.get('/add', departamentoController.departamento);

router.get('/table', departamentoController.getDepartamento);

router.post('/guardar', departamentoController.addDepartamento);

router.post('/actualizar/departamento', departamentoController.updateDepartamento);

router.get('/editar/:id', departamentoController.getDepartamentoById);

router.post('/eliminar/:id', departamentoController.deleteDepartamento);

module.exports = router;