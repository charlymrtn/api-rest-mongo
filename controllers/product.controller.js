const Product = require('../models/product');

const productCtrl = {};

productCtrl.getProducts = (req, res) => {
    res.status(200).send({products: []})
};

productCtrl.createProduct = (req, res) => {
    console.log(req.body)
    
    res.status(200).send({message: 'mensaje recibido'})
};

productCtrl.getProduct = (req, res) => {
    
};

productCtrl.editProduct = (req, res) => {
    
};

productCtrl.deleteProduct = (req, res) => {
   
};

module.exports = productCtrl;