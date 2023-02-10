"use strict";
const sender = require("../utils/envio_FE");

async function enviar_XML(
    clave,
    fecha,
    emisor_id_tipo,
    emisor_id_num,
    receptor_id_tipo,
    receptor_id_num,
    token,
    xml
) {
    return await sender.sendXML(
        clave,
        fecha,
        emisor_id_tipo,
        emisor_id_num,
        receptor_id_tipo,
        receptor_id_num,
        token,
        xml
    );
}

module.exports = {
    enviar_XML,
};
