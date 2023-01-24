'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const claveRoutes = require('./routes/claveRoutes/claveRoutes')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api',claveRoutes.routes);

module.exports = app;