"use strict";
const config = require("../../config");
const mysql = require("mysql");
const util = require("util");

/**
 * @description Executes the necesary sql query for getting all the seasons
 * @returns Database response
 */

async function getAllUsers() {
    try {
        const connection = mysql.createConnection(config.sql);

        const query = util.promisify(connection.query).bind(connection);

        const sql_query = "call getAllUsers()";

        const resp = await (async () => {
            try {
                const rows = await query(sql_query);
                return rows[0];
            } finally {
                connection.end();
            }
        })();

        return resp;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function crearUsuario(
    nombre_usuario,
    password,
    correo
) {
    try {
        const user = await getUsuarioByNombreUsuario(nombre_usuario);

        if (user.length == 0) {
            const connection = mysql.createConnection(config.sql);

            const query = util.promisify(connection.query).bind(connection);

            const sql_query = `call createUser('${nombre_usuario}','${password}','${correo}');`;

            const resp = await (async () => {
                try {
                    await query(sql_query);
                    return 1; // Success, se ha registrado el usuario.
                } finally {
                    connection.end();
                }
            })();

            return resp;
        }
        return 2; //Error, el nombre de usuario ya esta siendo utilizado.
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUsuarioByNombreUsuario(nombre_usuario) {
    try {
        const connection = mysql.createConnection(config.sql);

        const query = util.promisify(connection.query).bind(connection);

        const sql_query = `call getUserByNombreUsuario("${nombre_usuario}");`;

        const resp = await (async () => {
            try {
                const row = await query(sql_query);
                return row[0];
            } finally {
                connection.end();
            }
        })();

        return resp;
    } catch (error) {
        throw new Error(error.message);
    }
}


async function subirLlavep12(nombre_usuario, pinp12, llavep12) {
    try {
        const connection = mysql.createConnection(config.sql);

        const query = util.promisify(connection.query).bind(connection);

        const llavebase64 = llavep12.toString('base64')

        //const llaveBuffer =  Buffer.from(llavebase64, 'base64');

        const sql_query = `call subirLlaveUsuario("${nombre_usuario}", "${pinp12}", "${llavebase64}");`;

        const resp = await (async () => {
            try {
                const row = await query(sql_query);
                return "Se ha subido la llave correctamente";
            } finally {
                connection.end();
            }
        })();

        return resp;
    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports = {
    crearUsuario,
    getAllUsers,
    getUsuarioByNombreUsuario,
    subirLlavep12
};
