const express = require('express');

//services
const ProductsService = require('./services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')

const router = express.Router();
const service = new ProductsService()


router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/', 
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  //receive data
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    newProduct
  })
});

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
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
    next(error);
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
