'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const { mongoose } = require('./database');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/product', require('./routes/product.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});