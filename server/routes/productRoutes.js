const express = require("express");
const productRouter = express.Router();
const imageUpload = require('../controller/imagecontroller');
const productController = require('../controller/productcontroller');

productRouter.get('/products',productController.getProducts);

productRouter.get('/products/:id',productController.getProduct);

productRouter.post('/products', imageUpload.single('image') ,productController.createProduct );

productRouter.put('/products/:id',productController.updateProduct);

productRouter.delete('/products/:id',productController.deleteProduct);

module.exports = productRouter 