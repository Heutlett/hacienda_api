"use strict";
const logic = require("../../logic/firmadorLogic/firmadorLogic");

const firmar_FE_base64 = async (req, res, next) => {
    try {
        const content = await logic.firmarFE(
            req.body.nombre_usuario,
            req.body.token,
            req.body.xmlbase64
        );

        let resp;

        resp = {
            xmlbase64: content,
        };

        if (content == -1) {
            resp = {
                mensaje:
                    "Ha ocurrido un error al firmar el XML, por favor revise su llave y pin, si persiste, vuelva a subirlos.",
            };
        }

        if (content == -2) {
            resp = {
                mensaje:
                    "El usuario ingresado no se encuentra registrado en la base de datos.",
            };
        }

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const firmar_FE_text = async (req, res, next) => {
    try {
        const content = await logic.firmarFE(
            req.body.nombre_usuario,
            req.body.token,
            req.body.xmlbase64
        );

        let resp;

        if (content == -1) {
            resp = {
                mensaje:
                    "Ha ocurrido un error al firmar el XML, por favor revise su llave y pin, si persiste, vuelva a subirlos.",
            };
        }

        if (content == -2) {
            resp = {
                mensaje:
                    "El usuario ingresado no se encuentra registrado en la base de datos.",
            };
        }

        if (content != -1 & content != -2)
            resp = Buffer.from(content, "base64").toString();;

        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
module.exports = {
    firmar_FE_base64,
    firmar_FE_text,
};
