const express = require('express');

//services
const ProductsService = require('./services/product.service')
const service = new ProductsService()
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }

});

router.post('/', async (req, res) => {
  //receive data
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    newProduct
  })
});

router.patch('/:id', async (req, res) => {
  try {
    //params
    const { id } = req.params;
    //receive data
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'update',
      data: product,
      id,
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

})

router.delete('/:id', async (req, res) => {
  //params
  const { id } = req.params;
  const product = await service.delete(id);
  //response
  res.json({
    message: 'deleted',
    data: product
  })
})

module.exports = router;
