"use strict";
const userData = require("../../data/userData/userData");

async function getUsuarios() {

    let resp = await userData.getAllUsers();

    //console.log(resp);

    return resp;
}

async function registrarUsuario(
    nombre_usuario,
    password,
    rol,
    llavep12,
    pinp12,
    correo
) {
    return userData.crearUsuario(
        nombre_usuario,
        password,
        rol,
        llavep12,
        pinp12,
        correo
    );
}

module.exports = {
    getUsuarios,
    registrarUsuario,
};
