const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }

  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log("id: ", id, typeof(id))
  if(id === '999') {
    res.status(404).json({
      message: 'not found'
    });
  }else{
    res.status(200).json(
      {
        id,
        name: `Product ${id}`,
        price: 2000
      }
    )
  }
});

router.post('/', (req, res) => {
  //receive data
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
});

router.patch('/:id', (req, res) => {
  //params
  const { id } = req.params;
  //receive data
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  //params
  const { id } = req.params;
  //response
  res.json({
    message: 'deleted',
    id,
  })
})

module.exports = router;
