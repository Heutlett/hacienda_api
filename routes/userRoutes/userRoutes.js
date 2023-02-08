'use strict';

const express = require('express');
const userController = require('../../controllers/userController/userController');
const router = express.Router();
const multer  = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/registrarUsuario', userController.registrarUsuario);
router.get('/obtenerUsuarios', userController.obtenerUsuarios);
router.get('/obtenerUsuario', userController.obtenerUsuarioByNombreUsuario);
router.post('/subirLlavep12',upload.single('file'),userController.subirLlavep12);

module.exports = {
    routes: router
}