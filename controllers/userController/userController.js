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

const obtenerUsuarioByNombreUsuario = async (req, res, next) => {
    try {
        let resp = await logic.getUsuarioByNombreUsuario(
            req.body.nombre_usuario
        );

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
            req.body.correo
        );

        if (resp == 1) {
            res.status(200).send(
                "Se ha insertado el usuario " +
                    req.body.nombre_usuario +
                    " correctamente."
            );
        } else if (resp == 2)
            res.status(500).send(
                "Error: el nombre de usuario ingresado ya se encuentra en uso."
            );
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const subirLlavep12 = async (req, res, next) => {
    try {

        const resp = await logic.subirLlaveUsuario(req.body.nombre_usuario,req.body.pinp12,req.file.buffer);

        res.status(200).send(resp);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    obtenerUsuarios,
    registrarUsuario,
    obtenerUsuarioByNombreUsuario,
    subirLlavep12,
};
