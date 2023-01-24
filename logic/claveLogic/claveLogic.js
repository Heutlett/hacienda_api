"use strict";
const claveData = require("../../data/claveData/claveData");
const generator = require("./gen_clave");

/**
 * @description Funtion thats requests all seasons to the data layer
 * @returns All the seasons in the database
 */
const getHola = async () => {
    return claveData.getHola();
};

function generarClave(sucursal, punto_venta, tipo, numeracion, codigo_pais, fecha, identif, situacion) {

    let consecutivo = generator.generar_consecutivo(sucursal, punto_venta, tipo, numeracion);

    let clave = generator.generar_clave(
        codigo_pais,
        fecha,
        identif,
        consecutivo,
        situacion
    );

    return { Clave: clave, Consecutivo: consecutivo };
}

module.exports = {
    getHola,
    generarClave,
};
