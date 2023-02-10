"use strict";
const consult = require("../utils/consultar_FE");
const utils = require("../utils/general");

async function consultarXML(clave, accessToken) {
    const resp = await consult.consultarXml(clave, accessToken);

    if (resp != -1) {
        const respuesta_base64 = resp["respuesta-xml"];

        const respuesta_string = utils.convert_b64_to_string(respuesta_base64);

        return {
            clave: resp.clave,
            fecha: resp.fecha,
            ind_estado: resp["ind-estado"],
            respuesta_xml: respuesta_string,
        };
    }

    return {
        resultado: "error",
        mensaje:
            "Ha ocurrido un error, puede deberse a que el accessToken ha caducado",
    };
}

module.exports = {
    consultarXML,
};
