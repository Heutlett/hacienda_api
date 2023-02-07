'use strict';

const express = require('express');
const userController = require('../../controllers/userController/userController');
const router = express.Router();

router.post('/registrarUsuario', userController.registrarUsuario);
router.get('/obtenerUsuarios', userController.obtenerUsuarios);
module.exports = {
    routes: router
}