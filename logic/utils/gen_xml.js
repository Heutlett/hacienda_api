const XMLWriter = require("xml-writer");

// Factura Electrónica – 01

function generate_FE_xml(
    clave,
    codigo_actividad,
    numero_consecutivo,
    fecha_emision,
    nombre_emisor,
    tipo_id_emisor,
    numero_id_emisor,
    nombre_comercial,
    provincia_emisor,
    canton_emisor,
    distrito_emisor,
    barrio_emisor,
    senas_emisor,
    codigo_pais_emisor,
    telefono_emisor,
    correo_emisor,

    nombre_receptor,
    tipo_id_receptor,
    numero_id_receptor,
    provincia_receptor,
    canton_receptor,
    distrito_receptor,
    senas_receptor,
    codigo_pais_receptor,
    telefono_receptor,
    correo_receptor,
    codigo_venta,
    medio_pago,

    codigo_moneda,
    tipo_cambio,
    total_serv_gravados,
    total_serv_exentos,
    total_serv_exonerado,
    total_mercancias_gravadas,
    total_mercancias_exentas,
    total_merc_exonerada,
    total_gravado,
    total_exento,
    total_exonerado,
    total_venta,
    total_descuentos,
    total_venta_neta,
    total_impuesto,
    total_IVA_devuelto,
    total_comprobante,

    detalles
) {
    xw = new XMLWriter(false);
    xw.startDocument("1.0", "UTF-8");

    // Encabezado de [Factura Electrónica – 01]
    xw.startElement("FacturaElectronica");
    xw.writeAttribute("xmlns:ds", "http://www.w3.org/2000/09/xmldsig#")
        .writeAttribute(
            "xmlns:xsi",
            "http://www.w3.org/2001/XMLSchema-instance"
        )
        .writeAttribute(
            "xmlns",
            "https://cdn.comprobanteselectronicos.go.cr/xml-schemas/v4.3/facturaElectronica"
        )
        .writeAttribute(
            "xsi:schemaLocation",
            "https://cdn.comprobanteselectronicos.go.cr/xml-schemas/v4.3/facturaElectronica https://cdn.comprobanteselectronicos.go.cr/xml-schemas/v4.3/facturaElectronica.xsd"
        );

    // Identificadores de la FE
    xw.startElement("Clave").text(clave).endElement();
    xw.startElement("CodigoActividad").text(codigo_actividad).endElement();
    xw.startElement("NumeroConsecutivo").text(numero_consecutivo).endElement();
    xw.startElement("FechaEmision").text(fecha_emision).endElement();

    // Datos del emisor
    xw.startElement("Emisor");
    xw.startElement("Nombre").text(nombre_emisor).endElement();
    xw.startElement("Identificacion");
    xw.startElement("Tipo").text(tipo_id_emisor).endElement();
    xw.startElement("Numero").text(numero_id_emisor).endElement();
    xw.endElement();

    xw.startElement("NombreComercial").text(nombre_comercial).endElement();

    xw.startElement("Ubicacion");
    xw.startElement("Provincia").text(provincia_emisor).endElement();
    xw.startElement("Canton").text(canton_emisor).endElement();
    xw.startElement("Distrito").text(distrito_emisor).endElement();
    xw.startElement("Barrio").text(barrio_emisor).endElement();
    xw.startElement("OtrasSenas").text(senas_emisor).endElement();
    xw.endElement();

    xw.startElement("Telefono");
    xw.startElement("CodigoPais").text(codigo_pais_emisor).endElement();
    xw.startElement("NumTelefono").text(telefono_emisor).endElement();
    xw.endElement();

    xw.startElement("CorreoElectronico").text(correo_emisor).endElement();
    xw.endElement();

    // Datos del receptor
    xw.startElement("Receptor");
    xw.startElement("Nombre").text(nombre_receptor).endElement();
    xw.startElement("Identificacion");
    xw.startElement("Tipo").text(tipo_id_receptor).endElement();
    xw.startElement("Numero").text(numero_id_receptor).endElement();
    xw.endElement();

    xw.startElement("Ubicacion");
    xw.startElement("Provincia").text(provincia_receptor).endElement();
    xw.startElement("Canton").text(canton_receptor).endElement();
    xw.startElement("Distrito").text(distrito_receptor).endElement();
    xw.startElement("OtrasSenas").text(senas_receptor).endElement();
    xw.endElement();

    xw.startElement("Telefono");
    xw.startElement("CodigoPais").text(codigo_pais_receptor).endElement();
    xw.startElement("NumTelefono").text(telefono_receptor).endElement();
    xw.endElement();

    xw.startElement("CorreoElectronico").text(correo_receptor).endElement();
    xw.endElement();

    // Detalles de pago
    xw.startElement("CondicionVenta").text(codigo_venta).endElement();
    xw.startElement("MedioPago").text(medio_pago).endElement();

    //  ------------------------- Detalles servicio ------------------------------------------------

    xw.startElement("DetalleServicio");


    for (let index = 0; index < detalles.length; index++) {


        xw.startElement("LineaDetalle");
        xw.startElement("NumeroLinea").text(index+1).endElement();
        xw.startElement("Codigo").text(detalles[index].Codigo).endElement();

        xw.startElement("CodigoComercial");
        xw.startElement("Tipo").text(detalles[index].CodigoComercial.Tipo).endElement();
        xw.startElement("Codigo").text(detalles[index].CodigoComercial.Codigo).endElement();
        xw.endElement();

        xw.startElement("Cantidad").text(detalles[index].Cantidad).endElement();

        xw.startElement("UnidadMedida").text(detalles[index].UnidadMedida).endElement();
        xw.startElement("Detalle").text(detalles[index].Detalle).endElement();
        xw.startElement("PrecioUnitario").text(detalles[index].PrecioUnitario).endElement();
        xw.startElement("MontoTotal").text(detalles[index].MontoTotal).endElement();
        xw.startElement("SubTotal").text(detalles[index].SubTotal).endElement();

        xw.startElement("Impuesto");
        xw.startElement("Codigo").text(detalles[index].Impuesto.Codigo).endElement();
        xw.startElement("CodigoTarifa").text(detalles[index].Impuesto.CodigoTarifa).endElement();
        xw.startElement("Tarifa").text(detalles[index].Impuesto.Tarifa).endElement();
        xw.startElement("Monto").text(detalles[index].Impuesto.Monto).endElement();
        xw.endElement();

        xw.startElement("ImpuestoNeto").text(detalles[index].ImpuestoNeto).endElement();
        xw.startElement("MontoTotalLinea").text(detalles[index].MontoTotalLinea).endElement();

        xw.endElement();
    }

    xw.endElement();

    // Resumen factura

    xw.startElement("ResumenFactura");

    xw.startElement("CodigoTipoMoneda");
    xw.startElement("CodigoMoneda").text(codigo_moneda).endElement();
    xw.startElement("TipoCambio").text(tipo_cambio).endElement();
    xw.endElement();

    xw.startElement("TotalServGravados").text(total_serv_gravados).endElement();
    xw.startElement("TotalServExentos").text(total_serv_exentos).endElement();
    xw.startElement("TotalServExonerado")
        .text(total_serv_exonerado)
        .endElement();
    xw.startElement("TotalMercanciasGravadas")
        .text(total_mercancias_gravadas)
        .endElement();
    xw.startElement("TotalMercanciasExentas")
        .text(total_mercancias_exentas)
        .endElement();
    xw.startElement("TotalMercExonerada")
        .text(total_merc_exonerada)
        .endElement();
    xw.startElement("TotalGravado").text(total_gravado).endElement();
    xw.startElement("TotalExento").text(total_exento).endElement();
    xw.startElement("TotalExonerado").text(total_exonerado).endElement();
    xw.startElement("TotalVenta").text(total_venta).endElement();
    xw.startElement("TotalDescuentos").text(total_descuentos).endElement();
    xw.startElement("TotalVentaNeta").text(total_venta_neta).endElement();
    xw.startElement("TotalImpuesto").text(total_impuesto).endElement();
    xw.startElement("TotalIVADevuelto").text(total_IVA_devuelto).endElement();
    xw.startElement("TotalComprobante").text(total_comprobante).endElement();
    xw.endElement();

    xw.endDocument();

    return xw.toString();
}

module.exports = { generate_FE_xml };
