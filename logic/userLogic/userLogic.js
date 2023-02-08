"use strict";
const userData = require("../../data/userData/userData");

async function getUsuarios() {

    return await userData.getAllUsers();
}

async function getUsuarioByNombreUsuario(nombre_usuario){
    const user = await userData.getUsuarioByNombreUsuario(nombre_usuario);

    if (user.length == 0)
        return "El usuario " + nombre_usuario + " no se encuentra en la base de datoss." 

    return user[0];
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
        correo
    );
}

module.exports = {
    getUsuarios,
    registrarUsuario,
    getUsuarioByNombreUsuario
};
