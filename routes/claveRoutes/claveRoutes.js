'use strict';

const express = require('express');
const claveController = require('../../controllers/claveController/claveController');
const router = express.Router();

router.get('/generarClaveConsecutivo', claveController.generarClaveConsecutivo);
router.get('/generarConsecutivo', claveController.generarConsecutivo);
router.get('/generarClave', claveController.generarClave);

module.exports = {
    routes: router
}