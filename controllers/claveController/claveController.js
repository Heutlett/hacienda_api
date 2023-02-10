"use strict";
const logic = require("../../logic/claveLogic/claveLogic");

const generarClaveConsecutivo = async (req, res, next) => {
    try {

        const resp = await logic.generarClaveConsecutivo(
            req.query.sucursal,
            req.query.punto_venta,
            req.query.tipo,
            req.query.numeracion,
            req.query.codigo_pais,
            req.query.fecha,
            req.query.identificacion,
            req.query.situacion
        );

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const generarConsecutivo = async (req, res, next) => {
    try {
        const resp = await logic.generarConsecutivo(
            req.query.sucursal,
            req.query.punto_venta,
            req.query.tipo,
            req.query.numeracion
        );

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const generarClave = async (req, res, next) => {
    try {
        const resp = await logic.generarClave(
            req.query.codigo_pais,
            req.query.fecha,
            req.query.identificacion,
            req.query.situacion,
            req.query.consecutivo
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
