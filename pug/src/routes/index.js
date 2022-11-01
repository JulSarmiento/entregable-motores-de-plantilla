const express = require('express');
const router = express.Router();
const productsRouter = require('./products/products.router');

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    health: 'up',
    enviroment: process.env.ENVIROMENT
  });
})
.use('/products', productsRouter);



module.exports = router