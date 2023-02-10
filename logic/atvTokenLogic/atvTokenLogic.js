"use strict";
const generadorAtvToken = require("../utils/gen_token");

async function generateAtvToken(_client_id, _username, _password, _grant_type){

    const result = await generadorAtvToken.getToken(_client_id, _username, _password, _grant_type);

    return result
}


module.exports = {
    generateAtvToken
};
