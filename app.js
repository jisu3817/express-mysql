"use strict";
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const home = require('./src/routes/home');

dotenv.config();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', home);

module.exports = app;
