'use strict';

const express = require('express');
const claveController = require('../../controllers/claveController/claveController');
const router = express.Router();

router.get('/hola', claveController.getHola);
router.get('/generarClave', claveController.generarClave);

module.exports = {
    routes: router
}