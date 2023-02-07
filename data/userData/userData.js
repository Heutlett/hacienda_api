"use strict";
//const utils = require('../../utils/general');
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

        const sql_query = "select * from usuario;";

        const resp = await (async () => {
            try {
                const rows = await query(sql_query);
                return rows;
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
    rol,
    llavep12,
    pinp12,
    correo
) {
    try {
        const user = await getUsuarioByNombreUsuario(nombre_usuario);

        if (user.length == 0) {
            const connection = mysql.createConnection(config.sql);

            const query = util.promisify(connection.query).bind(connection);

            const sql_query = `INSERT INTO facturacion_db.usuario(rol,nombre_usuario,password,llaveP12,pinP12,correo) VALUES('${rol}','${nombre_usuario}','${password}','${llavep12}','${pinp12}','${correo}');`;

            const resp = await (async () => {
                try {
                    await query(sql_query);
                    return 1
                } finally {
                    connection.end();
                }
            })();

            return resp;
        }
        return 2 //Error, el nombre de usuario ya esta siendo utilizado

    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUsuarioByNombreUsuario(nombre_usuario) {
    try {
        const connection = mysql.createConnection(config.sql);

        const query = util.promisify(connection.query).bind(connection);

        const sql_query = `select * from usuario where nombre_usuario = '${nombre_usuario}';`;

        const resp = await (async () => {
            try {
                const row = await query(sql_query);
                return row;
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
    getUsuarioByNombreUsuario
};
