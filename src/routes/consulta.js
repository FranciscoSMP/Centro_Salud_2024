const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');
const { ensureAuthenticated } = require('../lib/auth');

router.get('/add', ensureAuthenticated, consultaController.consulta);

router.get('/table', ensureAuthenticated, consultaController.getConsulta);

router.post('/guardar/consulta', ensureAuthenticated, consultaController.addConsulta);

router.post('/actualizar/consulta', ensureAuthenticated, consultaController.updateConsulta);

router.get('/editar/:id', ensureAuthenticated, consultaController.getConsultaById);

router.post('/eliminar/:id', ensureAuthenticated, consultaController.deleteConsulta);

module.exports = router;

