"use strict";
const generator = require("../utils/gen_clave");

function generarClaveConsecutivo(sucursal, punto_venta, tipo, numeracion, codigo_pais, fecha, identificacion, situacion) {

    const consecutivo = generator.generar_consecutivo(sucursal, punto_venta, tipo, numeracion);

    if (consecutivo.error){
        return consecutivo.mensaje;
    }

    const clave = generator.generar_clave(
        codigo_pais,
        fecha,
        identificacion,
        consecutivo,
        situacion
    );

    if(clave.error){
        return clave.mensaje;
    }

    return { clave: clave, consecutivo: consecutivo };
}

function generarConsecutivo(sucursal, punto_venta, tipo, numeracion) {

    const consecutivo = generator.generar_consecutivo(sucursal, punto_venta, tipo, numeracion);

    if (consecutivo.error){
        return consecutivo.mensaje;
    }

    return { consecutivo: consecutivo };

}

function generarClave(codigo_pais, fecha, identificacion, situacion, consecutivo) {

    const clave = generator.generar_clave(
        codigo_pais,
        fecha,
        identificacion,
        consecutivo,
        situacion
    );

    if(clave.error){
        return clave.mensaje;
    }

    return { clave: clave, consecutivo: consecutivo };
}

module.exports = {
    generarClaveConsecutivo, generarConsecutivo, generarClave
};
