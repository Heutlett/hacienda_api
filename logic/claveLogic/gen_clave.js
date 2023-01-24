function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shift_zeros(tamano, num) {
    return ("0".repeat(tamano) + num).slice(-tamano);
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}


function validar_clave(codigo_pais, fecha, identif, consecutivo, situacion) {
    let msg = "Se han encontrado los siguientes errores en la clave:\n";
    let error = false;

    if (!isNumeric(codigo_pais)) {
        msg =
            msg +
            "- El codigo pais debe estar compuesto unicamente de numeros.\n";
        error = true;
    }

    if (codigo_pais.length != 3) {
        msg = msg + "- El codigo de pais debe ser de 3 digitos.\n";
        error = true;
    }

    console.log(fecha)

    if (!isNumeric(fecha.substring(0,1)) | !isNumeric(fecha.substring(3,4)) | !isNumeric(fecha.substring(6,7))
        | fecha.charAt(2) != '/' | fecha.charAt(5) != '/') {

        msg = msg + "- El formato de la fecha debe ser (DD/MM/YY)\n";
        error = true;
    }

    if (!isNumeric(identif)) {
        msg =
            msg +
            "- La identificacion debe estar compuesta unicamente de numeros.\n";
        error = true;
    }

    if ((identif.length > 12) | (identif.length == 0)) {
        msg =
            msg +
            "- La identificacion debe ser de maximo 12 digitos y corresponde al emisor.\n";
        error = true;
    }

    if (!isNumeric(consecutivo)) {
        msg =
            msg +
            "- El consecutivo debe estar compuesto unicamente de numeros.\n";
        error = true;
    }

    if (consecutivo.length != 20) {
        msg =
            msg +
            "- El formato del consecutivo es incorrecto, debe ser de 20 digitos.\n";
        error = true;
    }

    if (!isNumeric(situacion)) {
        msg =
            msg +
            "- La situacion debe estar compuesta unicamente de numeros.\n";
        error = true;
    }

    if (situacion.length != 1) {
        msg =
            msg +
            "- El formato de la situacion es incorrecto, debe ser de 1 digito.\n";
        error = true;
    }

    if (error) {
        console.log(msg);
        return false;
    }

    return true;
}

function validar_consecutivo(sucursal, punto_venta, tipo, numeracion) {
    let msg = "Se han encontrado los siguientes errores en el consecutivo:\n";
    let error = false;

    if (!isNumeric(sucursal)) {
        msg =
            msg + "- La sucursal debe estar compuesta unicamente de numeros.\n";
        error = true;
    }

    if (sucursal.length > 3) {
        msg = msg + "- La sucursal debe ser de maximo 3 digitos.\n";
        error = true;
    }

    if (!isNumeric(punto_venta)) {
        msg =
            msg +
            "- El punto de venta debe estar compuesto unicamente de numeros.\n";
        error = true;
    }

    if (punto_venta.length > 5) {
        msg = msg + "- El punto de venta debe ser de maximo 5 digitos.\n";
        error = true;
    }

    if (!isNumeric(tipo)) {
        msg = msg + "- El tipo debe estar compuesto unicamente de numeros.\n";
        error = true;
    }

    if (tipo.length > 2) {
        msg = msg + "- El tipo debe ser de maximo 2 digitos.\n";
        error = true;
    }

    if (!isNumeric(numeracion)) {
        msg =
            msg +
            "- La numeracion debe estar compuesta unicamente de numeros.\n";
        error = true;
    }

    if (numeracion.length > 10) {
        msg = msg + "- La numeracion debe ser de maximo 10 digitos.\n";
        error = true;
    }

    if (error) {
        console.log(msg);
        return false;
    }

    return true;
}

function test_print_clave(
    codigo_pais,
    fecha,
    identif,
    consecutivo,
    situacion,
    codigo_seguridad,
    clave
) {
    console.log("\nGeneracion de clave:\n");
    console.log("Codigo pais:\t\t" + codigo_pais);
    console.log("Fecha:\t\t\t" + fecha);
    console.log("Identificacion:\t\t" + identif);
    console.log("Consecutivo:\t\t" + consecutivo);
    console.log("Situacion:\t\t" + situacion);
    console.log("Codigo seguridad:\t" + codigo_seguridad);
    console.log("Tamano de clave:\t" + clave.length);
    console.log("\nClave generada:\t\t" + clave);
}

function test_print_consecutivo(sucursal, punto_venta, tipo, numeracion, consecutivo){
    console.log("\nGeneracion de consecutivo:\n");
    console.log("Sucursal:\t\t" + sucursal);
    console.log("Punto de venta:\t\t" + punto_venta);
    console.log("Tipo:\t\t\t" + tipo);
    console.log("Numeracion:\t\t" + numeracion);
    console.log("Tamano consecutivo:\t" + consecutivo.length);
    console.log("\nConsecutivo generado:\t" + consecutivo);
}

/*  
    Clave: lenght(20)
    A: Casa matriz, sucursales (3)
    B: Terminal o punto de venta (5)
    C: Tipo de comprobante o documento asociado (2)
    D: Numeracion del comprobante electronico (10)
*/

function generar_consecutivo(sucursal, punto_venta, tipo, numeracion) {
    if (!validar_consecutivo(sucursal, punto_venta, tipo, numeracion)) {
        return;
    }

    sucursal = shift_zeros(3, sucursal);
    punto_venta = shift_zeros(5, punto_venta);
    tipo = shift_zeros(2, tipo);
    numeracion = shift_zeros(10, numeracion);

    let consecutivo =
        sucursal.toString() +
        punto_venta.toString() +
        tipo.toString() +
        numeracion.toString();

    test_print_consecutivo(sucursal, punto_venta, tipo, numeracion, consecutivo)

    return consecutivo;
}

/*  
    Clave: lenght(50)
    A: Codigo pais (3)
    B: Dia (2)
    C: Mes (2)
    D: Agno (2)
    E: Identificacion (12)
    F: Consecutivo (20)
    G: Situacion (1) : 1. Situación Normal, 2. Contingencia, 3. Sin Internet.
    H: Codigo seguridad (8)
*/

function generar_clave(codigo_pais, fecha, identif, consecutivo, situacion) {
    if (!validar_clave(codigo_pais, fecha, identif, consecutivo, situacion)) {
        return;
    }

    let codigo_seguridad = shift_zeros(8, randomRange(0, 99999999));

    identif = shift_zeros(12, identif);

    let fecha_ =
        fecha.substring(0,2) + fecha.substring(3,5) + fecha.substring(6,8)

    let clave =
        codigo_pais.toString() +
        fecha_ +
        identif +
        consecutivo.toString() +
        situacion.toString() +
        codigo_seguridad;

    test_print_clave(
        codigo_pais,
        fecha_,
        identif,
        consecutivo,
        situacion,
        codigo_seguridad,
        clave
    );

    return clave;
}

module.exports = { generar_clave, generar_consecutivo };