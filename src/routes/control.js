const express = require('express');
const router = express.Router();
const controlController = require('../controllers/controlController');
const { ensureAuthenticated } = require('../lib/auth');

router.get('/add', ensureAuthenticated, controlController.control);

router.get('/table', ensureAuthenticated, controlController.getControl);

router.post('/guardar/control', ensureAuthenticated, controlController.addControl);

router.post('/actualizar/control', ensureAuthenticated, controlController.updateControl);

router.get('/editar/:id', ensureAuthenticated, controlController.getControlById);

router.post('/eliminar/:id', ensureAuthenticated, controlController.deleteControl);

module.exports = router;