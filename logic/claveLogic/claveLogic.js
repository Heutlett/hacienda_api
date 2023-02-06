"use strict";
const generator = require("../utils/gen_clave");

function generarClaveConsecutivo(sucursal, punto_venta, tipo, numeracion, codigo_pais, fecha, identif, situacion) {

    let consecutivo = generator.generar_consecutivo(sucursal, punto_venta, tipo, numeracion);

    let clave = generator.generar_clave(
        codigo_pais,
        fecha,
        identif,
        consecutivo,
        situacion
    );

    return { clave: clave, consecutivo: consecutivo };
}

function generarConsecutivo(sucursal, punto_venta, tipo, numeracion) {

    return { consecutivo: generator.generar_consecutivo(sucursal, punto_venta, tipo, numeracion) };

}

function generarClave(codigo_pais, fecha, identif, situacion, consecutivo) {

    let clave = generator.generar_clave(
        codigo_pais,
        fecha,
        identif,
        consecutivo,
        situacion
    );

    return { clave: clave, consecutivo: consecutivo };
}

module.exports = {
    generarClaveConsecutivo, generarConsecutivo, generarClave
};
