"use strict";
const logic = require("../../logic/atvTokenLogic/atvTokenLogic");

const generarToken = async (req, res, next) => {
    try {

        const resp = await logic.generateAtvToken(req.body.client_id, req.body.username, req.body.password, req.body.grant_type);

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    generarToken
};
