'use strict'

const Product = require('../models/product');

const productCtrl = {};

productCtrl.getProducts = (req, res) => {

    Product.find((err, products)=>{
        if (err) return res.status(500).send({message: `Error al realizar la petición : ${err}`})
        if (!products) return res.status(404).send({message: `no hay productos`})

        res.status(200).send({products})
    })
};

productCtrl.createProduct = (req, res) => {
    console.log('POST api/product');
    console.log(req.body);

    let product = new Product();
    product.name = req.body.name
    product.description = req.body.description
    product.photo = req.body.photo
    product.price = req.body.price
    product.category = req.body.category

    product.save((err, product)=>{
        if (err) res.status(500).send({message: `Error al salvar en la db : ${err}`})

        res.status(200).send({product})
    })
};

productCtrl.getProduct = (req, res) => {
    let id = req.params.id

    Product.findById(id, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición : ${err}`})
        if (!product) return res.status(404).send({message: `el producto ${id} no existe`})

        res.status(200).send({product})

    })
};

productCtrl.editProduct = (req, res) => {
    
};

productCtrl.deleteProduct = (req, res) => {
   
};

module.exports = productCtrl;