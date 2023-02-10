const axios = require("axios");

async function sendXML(clave,fecha,emisor_id_tipo,emisor_id_num, receptor_id_tipo, receptor_id_num, token,xml) {

    const requestBody = {
        clave: clave,
        fecha: fecha,
        emisor: {
            tipoIdentificacion: emisor_id_tipo,
            numeroIdentificacion: emisor_id_num
        },
        receptor: {
            tipoIdentificacion: receptor_id_tipo,
            numeroIdentificacion: receptor_id_num
        },
        comprobanteXml: xml
    };

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    };

    let result = await axios
        .post("https://api-sandbox.comprobanteselectronicos.go.cr/recepcion/v1/recepcion/", requestBody, config)
        .then((result) => {
            return {resultado: "satisfactorio", mensaje:"Se ha enviado el comprobante a hacienda, debe consultar su estado"}
        })
        .catch((err) => {
            return {resultado: "error", mensaje:err.message}
        });

    return result
}

module.exports = { sendXML };
