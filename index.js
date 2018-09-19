'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const app = express()

const { mongoose } = require('./database');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs',hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))

app.set('view engine','.hbs')

app.use('/api', require('./routes/product.routes'));

app.get('/login',(req, res)=>{
    res.render('login')
})
app.get('/', (req, res) => {
    res.render('product')
  })

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});