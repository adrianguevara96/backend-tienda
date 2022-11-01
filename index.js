const express = require('express');
const app = express();
const port = 3000;

//data faker
const faker = require('faker');

//GETS
app.get('/products', (req, res) => {
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

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'Product 2',
      price: 2000
    }
  )
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Query params, get
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  }else{
    res.send('There are no params');
  }
})

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
})






app.get('/', (req, res) => {
  res.send('Hello, my server in express');
})


app.listen(port, () => {
  console.log("Port: " + port);
})
