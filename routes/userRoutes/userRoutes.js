'use strict';

const express = require('express');
const userController = require('../../controllers/userController/userController');
const router = express.Router();

router.post('/registrarUsuario', userController.registrarUsuario);
router.get('/obtenerUsuarios', userController.obtenerUsuarios);
router.get('/obtenerUsuario', userController.obtenerUsuarioByNombreUsuario);
module.exports = {
    routes: router
}