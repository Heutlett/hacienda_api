'use strict';

const express = require('express');
const atvTokenController = require('../../controllers/atvTokenController/atvTokenController');
const router = express.Router();

router.get('/generarToken', atvTokenController.generarToken);

module.exports = {
    routes: router
}