'use strict'

const express = require('express');
const router = express.Router();

const product = require('../controllers/product.controller');

const user = require('../controllers/user')

const auth = require('../middlewares/auth')

router.get('/product', product.getProducts);
router.post('/product',auth, product.createProduct);
router.get('/product/:id', product.getProduct);
router.put('/product/:id',auth,product.editProduct);
router.delete('/product/:id',auth, product.deleteProduct);

router.get('/private',auth, (req, res) => {
    res.status(200).send({message: 'tienes acceso :)'})
})

router.post('/register', user.signUp)
router.post('/login', user.signIn)

module.exports = router;