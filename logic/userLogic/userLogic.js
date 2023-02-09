"use strict";
const userData = require("../../data/userData/userData");
const utils = require("../utils/general")

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
    correo
) {
    return await userData.crearUsuario(
        nombre_usuario,
        password,
        correo
    );
}

async function subirLlaveUsuario(nombre_usuario, pinp12, llavep12){

    const fileName = 'firmas_usuarios/' + nombre_usuario +  '.p12';

    const result = await utils.writeFile(fileName, llavep12);

    if(result)
        return await userData.subirLlavep12(nombre_usuario,pinp12);
    else{
        
        return result
    }   
        
}

module.exports = {
    getUsuarios,
    registrarUsuario,
    getUsuarioByNombreUsuario,
    subirLlaveUsuario
};
