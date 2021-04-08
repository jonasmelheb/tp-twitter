const express = require('express');
const { resolve } = require('path');
const router = require('./router');
require('./database');

const app = express();

// Configuration
app.use('/static', express.static(resolve('public')));
app.use('/', router);

module.exports = app;
