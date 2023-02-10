"use strict";
const logic = require("../../logic/envioLogic/envioLogic");

const enviar_XML = async (req, res, next) => {
    try {
        const resp = await logic.enviar_XML(
            req.body.clave,
            req.body.fecha,
            req.body.emisor_identificacion_tipo,
            req.body.emisor_identificacion_numero,
            req.body.receptor_identificacion_tipo,
            req.body.receptor_identificacion_numero,
            req.body.accessToken,
            req.body.xml,
        );

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    enviar_XML,
};
