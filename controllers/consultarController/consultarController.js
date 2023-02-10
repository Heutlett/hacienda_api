"use strict";
const logic = require("../../logic/consultarLogic/consultarLogic");

const consultar_XML = async (req, res, next) => {
    try {
        const resp = await logic.consultarXML(req.body.clave, req.body.accessToken);

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    consultar_XML,
};
