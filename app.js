const HostDB = require('./Config').HostDB;

const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');

const apiRoute = require('./routes/api');
const userRoute = require('./routes/user');
const bouquetsRoute = require('./routes/bouquet');
const flowersRoute = require('./routes/flower');
const shopRoute = require('./routes/shop');

const app = express();
app.use(compression());

mongoose.connect(HostDB).then(() => {
    console.log('Connected to MongoDB with Success !');
}).catch((err) => {
    console.log('MongoDB ERROR', err);
});

app.use(bodyParser.json());

app.use('/api/', apiRoute);
app.use('/api/user/', userRoute);
app.use('/api/bouquets/', bouquetsRoute);
app.use('/api/flowers/', flowersRoute);
app.use('/api/shop/', shopRoute);

module.exports = app;