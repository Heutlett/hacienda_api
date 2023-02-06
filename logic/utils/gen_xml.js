const XMLWriter = require("xml-writer");
const fs = require("fs");

function create_file(content) {
    const today = new Date();
    //const file_name =
    //    "./Facturas/SinFirmar/" + today.toISOString().substring(0, 16) + ".xml";

    const file_name = "./Facturas/SinFirmar/FE_testing.xml";

    fs.writeFileSync(file_name, content);
}

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
    medio_pago
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

    // Detalles servicio
    xw.startElement("DetalleServicio");

    xw.startElement("LineaDetalle");
    xw.startElement("NumeroLinea").text("1").endElement();
    xw.startElement("Codigo").text("7211200000300").endElement();

    xw.startElement("CodigoComercial");
    xw.startElement("Tipo").text("01").endElement();
    xw.startElement("Codigo").text("01").endElement();
    xw.endElement();
    
    xw.startElement("Cantidad").text("1.00").endElement();

    xw.startElement("UnidadMedida").text("Alc").endElement();
    xw.startElement("Detalle").text("Alquiler edificio Sucursal CCSS Miramar setiembre 2022").endElement();
    xw.startElement("PrecioUnitario").text("1050000.00").endElement();
    xw.startElement("MontoTotal").text("1050000.00").endElement();
    xw.startElement("SubTotal").text("1050000.00").endElement();

    xw.startElement("Impuesto");
    xw.startElement("Codigo").text("01").endElement();
    xw.startElement("CodigoTarifa").text("01").endElement();
    xw.startElement("Tarifa").text("0").endElement();
    xw.startElement("Monto").text("0.00").endElement();
    xw.endElement();

    xw.startElement("ImpuestoNeto").text("0.00").endElement();
    xw.startElement("MontoTotalLinea").text("1050000.00").endElement();

    xw.endElement();

    xw.endElement();

    // Resumen factura

    xw.startElement("ResumenFactura");

    xw.startElement("CodigoTipoMoneda");
    xw.startElement("CodigoMoneda").text("CRC").endElement();
    xw.startElement("TipoCambio").text("1").endElement();
    xw.endElement();

    xw.startElement("TotalServGravados").text("1050000.00").endElement();
    xw.startElement("TotalServExentos").text("0").endElement();
    xw.startElement("TotalServExonerado").text("0").endElement();
    xw.startElement("TotalMercanciasGravadas").text("0").endElement();
    xw.startElement("TotalMercanciasExentas").text("0").endElement();
    xw.startElement("TotalMercExonerada").text("0").endElement();
    xw.startElement("TotalGravado").text("1050000.00").endElement();
    xw.startElement("TotalExento").text("0").endElement();
    xw.startElement("TotalExonerado").text("0").endElement();
    xw.startElement("TotalVenta").text("1050000.00").endElement();
    xw.startElement("TotalDescuentos").text("0").endElement();
    xw.startElement("TotalVentaNeta").text("1050000.00").endElement();
    xw.startElement("TotalImpuesto").text("0").endElement();
    xw.startElement("TotalIVADevuelto").text("0").endElement();
    xw.startElement("TotalComprobante").text("1050000.00").endElement();
    xw.endElement();

    xw.endDocument();



    create_file(xw.toString());

}

module.exports = { generate_FE_xml };
