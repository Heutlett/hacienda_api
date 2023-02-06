'use strict';

const express = require('express');
const genXmlController = require('../../controllers/genXmlController/genXmlController');
const router = express.Router();

router.get('/generate_FE_XML_base64', genXmlController.generate_FE_XML_base64);
router.get('/generate_FE_XML_raw', genXmlController.generate_FE_XML_raw);

module.exports = {
    routes: router
}