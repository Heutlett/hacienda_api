"use strict";
const logic = require("../../logic/userLogic/userLogic");

const obtenerUsuarios = async (req, res, next) => {
    try {
        let resp = await logic.getUsuarios();

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const registrarUsuario = async (req, res, next) => {
    try {
        let resp = await logic.registrarUsuario(
            req.body.nombre_usuario,
            req.body.password,
            req.body.rol,
            req.body.llavep12,
            req.body.pinp12,
            req.body.correo
        );

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    obtenerUsuarios,
    registrarUsuario,
};
