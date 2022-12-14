const express = require('express');

//services
const ProductsService = require('./services/product.service')
const service = new ProductsService()
const router = express.Router();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  //receive data
  const body = req.body;
  const newProduct = service.create(body);

  res.status(201).json({
    newProduct
  })
});

router.patch('/:id', (req, res) => {
  //params
  const { id } = req.params;
  //receive data
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    message: 'update',
    data: product,
    id,
  })
})

router.delete('/:id', (req, res) => {
  //params
  const { id } = req.params;
  const product = service.delete(id);
  //response
  res.json({
    message: 'deleted',
    data: product
  })
})

module.exports = router;
