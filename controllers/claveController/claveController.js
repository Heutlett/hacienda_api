"use strict";
const logic = require("../../logic/claveLogic/claveLogic");

const generarClaveConsecutivo = async (req, res, next) => {
    try {
        let resp = await logic.generarClaveConsecutivo(
            req.body.sucursal,
            req.body.punto_venta,
            req.body.tipo,
            req.body.numeracion,
            req.body.codigo_pais,
            req.body.fecha,
            req.body.identif,
            req.body.situacion
        );

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const generarConsecutivo = async (req, res, next) => {
    try {
        let resp = await logic.generarConsecutivo(
            req.body.sucursal,
            req.body.punto_venta,
            req.body.tipo,
            req.body.numeracion
        );

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const generarClave = async (req, res, next) => {
    try {
        let resp = await logic.generarClave(
            req.body.codigo_pais,
            req.body.fecha,
            req.body.identif,
            req.body.situacion,
            req.body.consecutivo
        );

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    generarClaveConsecutivo,
    generarConsecutivo,
    generarClave
};
