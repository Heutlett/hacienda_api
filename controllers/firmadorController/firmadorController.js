"use strict";
const logic = require("../../logic/firmadorLogic/firmadorLogic");

const firmar_FE_base64 = async (req, res, next) => {
    try {
        const resp = {
            xmlbase64: await logic.firmarFE(
                req.body.nombre_usuario,
                req.body.token,
                req.body.xmlbase64
            ),
        };

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const firmar_FE_text = async (req, res, next) => {
    try {

        const xmlbase64 = await logic.firmarFE(
            req.body.nombre_usuario,
            req.body.token,
            req.body.xmlbase64
        )

        const xmlText = Buffer.from(xmlbase64, "base64").toString();

        res.status(200).send(xmlText);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
module.exports = {
    firmar_FE_base64,
    firmar_FE_text
};
