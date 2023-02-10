const axios = require("axios");
const qs = require("querystring");

async function getToken(_client_id, _username, _password, _grant_type) {

    const requestBody = {
        client_id: _client_id,
        username: _username,
        password: _password,
        grant_type: _grant_type,
    };

    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };

    let result = await axios
        .post("https://idp.comprobanteselectronicos.go.cr/auth/realms/rut-stag/protocol/openid-connect/token", qs.stringify(requestBody), config)
        .then((result) => {
            return { access_token: result.data.access_token, refresh_token: result.data.refresh_token}
        })
        .catch((err) => {
            return "Ha ocurrido un error: " + err
        });
    

    return result
}

module.exports = { getToken };
