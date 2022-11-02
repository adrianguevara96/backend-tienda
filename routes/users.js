const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    users.push({
      name: `Name ${i+1}`,
      address: `Address ${i+1}`,
      money: parseInt(faker.commerce.price())
    })
  }

  res.json(users);
});

module.exports = router;

