'use strict';

const express = require('express');
const envioController = require('../../controllers/envioController/envioController');
const router = express.Router();

router.post('/enviar_XML', envioController.enviar_XML);

module.exports = {
    routes: router
}