"use strict";
const logic = require("../../logic/firmadorLogic/firmadorLogic");

const firmar_FE_xml_req = async (req, res, next) => {
    try {


        //res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
};
