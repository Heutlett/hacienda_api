const axios = require("axios");
const qs = require("querystring");

async function sendXML(clave,fecha,emisor_id_tipo,emisor_id_num, receptor_id_tipo, receptor_id_num, xml,token) {

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

    await axios
        .post("https://api-sandbox.comprobanteselectronicos.go.cr/recepcion/v1/recepcion/", requestBody, config)
        .then((result) => {
            console.log("\n\nRespuesta:\n\n")
            console.log("status: " + result.status)
            console.log("\nheaders: " + result.headers)
            console.log("\n-------------------------------------------------------------------------------------\n")
            return result.data
        })
        .catch((err) => {
            console.log("Error al enviar el comprobante a hacienda:\n" + err)
            return "Error al enviar el comprobante a hacienda."
        });
}

module.exports = { sendXML };
