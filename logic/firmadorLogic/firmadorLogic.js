"use strict";
const firmador = require("../utils/firmar_FE");
const userData = require("../../data/userData/userData");
const utils = require("../utils/general");

async function firmarFE(nombre_usuario, token, xmlbase64) {
    // Agregar validacion con token para poder obtener la llave

    const pinp12 = await userData.getPinp12(nombre_usuario);
    const routeLlavep12 = "firmas_usuarios/" + nombre_usuario + ".p12";

    const file_name = "Facturas_temp/" + nombre_usuario + ".xml";

    const result = await utils.writeFile(
        file_name,
        Buffer.from(xmlbase64, "base64").toString("utf-8")
    );
    if (result)
        return firmador.firmar_FE(routeLlavep12, pinp12, file_name)
}

module.exports = {
    firmarFE,
};
