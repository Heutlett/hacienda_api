"use strict";
const logic = require("../../logic/genXmlLogic/genXmlLogic");

const generate_FE_XML_base64 = async (req, res, next) => {
    try {
        let result = {
            clave: req.body.clave,
            consecutivo: req.body.consecutivo,
            xmlbase64: logic.generar_FE_XML_base64(
                req.body.clave,
                req.body.codigo_actividad,
                req.body.consecutivo,
                req.body.fecha_emision,
                req.body.nombre_emisor,
                req.body.tipo_id_emisor,
                req.body.numero_id_emisor,
                req.body.nombre_comercial,
                req.body.provincia_emisor,
                req.body.canton_emisor,
                req.body.distrito_emisor,
                req.body.barrio_emisor,
                req.body.senas_emisor,
                req.body.codigo_pais_emisor,
                req.body.telefono_emisor,
                req.body.correo_emisor,
                req.body.nombre_receptor,
                req.body.tipo_id_receptor,
                req.body.numero_id_receptor,
                req.body.provincia_receptor,
                req.body.canton_receptor,
                req.body.distrito_receptor,
                req.body.senas_receptor,
                req.body.codigo_pais_receptor,
                req.body.telefono_receptor,
                req.body.correo_receptor,
                req.body.codigo_venta,
                req.body.medio_pago,
                req.body.codigo_moneda,
                req.body.tipo_cambio,
                req.body.total_serv_gravados,
                req.body.total_serv_exentos,
                req.body.total_serv_exonerado,
                req.body.total_mercancias_gravadas,
                req.body.total_mercancias_exentas,
                req.body.total_merc_exonerada,
                req.body.total_gravado,
                req.body.total_exento,
                req.body.total_exonerado,
                req.body.total_venta,
                req.body.total_descuentos,
                req.body.total_venta_neta,
                req.body.total_impuesto,
                req.body.total_IVA_devuelto,
                req.body.total_comprobante,
                req.body.detalles
            ),
        };

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const generate_FE_XML_raw = async (req, res, next) => {
    try {
        let result = logic.generar_FE_XML_raw(
                req.body.clave,
                req.body.codigo_actividad,
                req.body.consecutivo,
                req.body.fecha_emision,
                req.body.nombre_emisor,
                req.body.tipo_id_emisor,
                req.body.numero_id_emisor,
                req.body.nombre_comercial,
                req.body.provincia_emisor,
                req.body.canton_emisor,
                req.body.distrito_emisor,
                req.body.barrio_emisor,
                req.body.senas_emisor,
                req.body.codigo_pais_emisor,
                req.body.telefono_emisor,
                req.body.correo_emisor,
                req.body.nombre_receptor,
                req.body.tipo_id_receptor,
                req.body.numero_id_receptor,
                req.body.provincia_receptor,
                req.body.canton_receptor,
                req.body.distrito_receptor,
                req.body.senas_receptor,
                req.body.codigo_pais_receptor,
                req.body.telefono_receptor,
                req.body.correo_receptor,
                req.body.codigo_venta,
                req.body.medio_pago,
                req.body.codigo_moneda,
                req.body.tipo_cambio,
                req.body.total_serv_gravados,
                req.body.total_serv_exentos,
                req.body.total_serv_exonerado,
                req.body.total_mercancias_gravadas,
                req.body.total_mercancias_exentas,
                req.body.total_merc_exonerada,
                req.body.total_gravado,
                req.body.total_exento,
                req.body.total_exonerado,
                req.body.total_venta,
                req.body.total_descuentos,
                req.body.total_venta_neta,
                req.body.total_impuesto,
                req.body.total_IVA_devuelto,
                req.body.total_comprobante,
                req.body.detalles
            );

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    generate_FE_XML_base64,
    generate_FE_XML_raw
};
