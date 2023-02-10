"use strict";
const logic = require("../../logic/atvTokenLogic/atvTokenLogic");

const generarToken = async (req, res, next) => {
    try {

        const resp = await logic.generateAtvToken(req.query.client_id, req.query.username, req.query.password, req.query.grant_type);

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    generarToken
};
