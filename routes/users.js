const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: faker.address.cityName(),
    })
  }

  res.json(users);
});

router.post('/', (req, res) => {
  //body
  const body = req.body;
  //response
  res.json({
    message: "user added",
    data: body
  })
})

router.put('/:id', (req, res) => {
  //params
  const { id } = req.params;
  //body
  const body = req.body;
  //response
  res.json({
    message: 'user updated',
    data: body,
    id
  })
});

router.delete('/:id', (req, res) => {
  //params
  const { id } = req.params;
  //response
  res.json({
    message: 'user deleted',
    id
  })
})

module.exports = router;

