'use strict'

const express = require('express');
const router = express.Router();

const product = require('../controllers/product.controller');

const auth = require('../middlewares/auth')

router.get('/product', product.getProducts);
router.post('/product', product.createProduct);
router.get('/product/:id', product.getProduct);
router.put('/product/:id', product.editProduct);
router.delete('/product/:id', product.deleteProduct);

router.get('/private',auth, (req, res) => {
    res.status(200).send({message: 'tienes acceso :)'})
})

module.exports = router;