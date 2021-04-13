const express = require('express');
const { resolve } = require('path');
const router = require('./router');
const session = require('express-session');
require('./database');

var sess;
const app = express();

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
// Configuration
app.set('views', resolve('views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(resolve('public')));
app.use('/', router);

module.exports = app;
