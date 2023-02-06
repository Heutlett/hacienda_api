const axios = require("axios");
const qs = require("querystring");

async function consultarXml(clave, token) {
    axios
        .get("https://api-sandbox.comprobanteselectronicos.go.cr/recepcion/v1/recepcion/"+clave, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
}

module.exports = { consultarXml };
