"use strict";
const userData = require("../../data/userData/userData");

async function getUsuarios() {

    return await userData.getAllUsers();
}

async function getUsuarioByNombreUsuario(nombre_usuario){
    return await userData.getUsuarioByNombreUsuario(nombre_usuario);
}

async function registrarUsuario(
    nombre_usuario,
    password,
    rol,
    llavep12,
    pinp12,
    correo
) {
    return await userData.crearUsuario(
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
    getUsuarioByNombreUsuario
};
