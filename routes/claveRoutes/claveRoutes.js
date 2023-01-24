'use strict';

const express = require('express');
const claveController = require('../../controllers/claveController/claveController');
const router = express.Router();

router.get('/clave', claveController.getHola);

module.exports = {
    routes: router
}