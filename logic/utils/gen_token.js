const axios = require("axios");
const qs = require("querystring");

async function getToken() {

    

    const requestBody = {
        client_id: "api-stag",
        username: "cpf-06-0453-0340@stag.comprobanteselectronicos.go.cr",
        password: "I7rT>^!5mR^!eS>=mkVB",
        grant_type: "password",
    };

    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };

    let token = await axios
        .post("https://idp.comprobanteselectronicos.go.cr/auth/realms/rut-stag/protocol/openid-connect/token", qs.stringify(requestBody), config)
        .then((result) => {
            //console.log("\n\naccess_token:\n" + result.data.access_token)
            //console.log("\n-------------------------------------------------------------------------------------\n")
            return result.data.access_token
        })
        .catch((err) => {
            return "Ha ocurrido un error: " + err
        });
    

    return token
}

module.exports = { getToken };
