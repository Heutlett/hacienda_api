'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const claveRoutes = require('./routes/claveRoutes/claveRoutes')
const genXmlRoutes = require('./routes/genXmlRoutes/genXmlRoutes')
const firmadorRoutes = require('./routes/firmadorRoutes/firmadorRoutes')
const atvTokenRoutes = require('./routes/atvTokenRoutes/atvTokenRoutes')
const userRoutes = require('./routes/userRoutes/userRoutes')
const envioRoutes = require('./routes/envioRoutes/envioRoutes')
const consultarRoutes = require('./routes/consultarRoutes/consultarRoutes')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api',claveRoutes.routes);
app.use('/api',genXmlRoutes.routes);
app.use('/api',firmadorRoutes.routes);
app.use('/api',atvTokenRoutes.routes);
app.use('/api',userRoutes.routes);
app.use('/api',envioRoutes.routes);
app.use('/api',consultarRoutes.routes);

module.exports = app;