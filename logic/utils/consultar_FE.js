const axios = require("axios");
const qs = require("querystring");

async function consultarXml(clave, token) {
    
    const result = await axios
        .get("https://api-sandbox.comprobanteselectronicos.go.cr/recepcion/v1/recepcion/"+clave, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return -1
        });

    return result;
}

module.exports = { consultarXml };
