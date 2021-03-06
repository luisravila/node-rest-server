const express = require('express');
// Using Node.js `require()`
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json());

// Habilitar Public
app.use(express.static(path.resolve(__dirname, '../public')));

//Config global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('BD OK');
});

app.listen(process.env.PORT, () => {
    console.log('Puerto', process.env.PORT)
});