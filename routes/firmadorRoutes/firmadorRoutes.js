'use strict';

const express = require('express');
const firmadorController = require('../../controllers/firmadorController/firmadorController');
const router = express.Router();

router.post('/firmar_FE_base64', firmadorController.firmar_FE_base64);
router.post('/firmar_FE_text', firmadorController.firmar_FE_text);

module.exports = {
    routes: router
}