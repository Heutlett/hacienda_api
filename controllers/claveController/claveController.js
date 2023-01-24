"use strict";
const logic = require("../../logic/claveLogic/claveLogic");

/**
 * @description HTML standard call that adquires all the championship seasons currently on the database.
 * @param {*} req HTML standard request data sent over by the web client
 * @param {*} res HTML standard response data to be sent to the web client
 * @param {*} next Standard callback argument to the middleware function
 */
const getHola = async (req, res, next) => {
    try {
        res.status(200).send("hola");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const generarClave = async (req, res, next) => {
    try {

        let resp = await logic.generarClave(
            req.query.sucursal,
            req.query.punto_venta,
            req.query.tipo,
            req.query.numeracion,
            req.query.codigo_pais,
            req.query.fecha,
            req.query.identif,
            req.query.situacion
        )

        res.status(200).send(resp);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getHola,
    generarClave,
};
