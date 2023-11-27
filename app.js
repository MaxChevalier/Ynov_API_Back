const HostDB = require('./Config').HostDB;

const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = express();
app.use(compression());

mongoose.connect(HostDB).then(() => {
    console.log('Connected to MongoDB with Success !');
}).catch((err) => {
    console.log('MongoDB ERROR', err);
});

app.use(bodyParser.json());

module.exports = app;