'use strict';

const express = require('express');
const consultarController = require('../../controllers/consultarController/consultarController');
const router = express.Router();

router.get('/consultar_comprobante', consultarController.consultar_XML);

module.exports = {
    routes: router
}