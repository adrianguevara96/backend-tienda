const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, my server in express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hello, Im a new endpoint');
})

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Product 1',
      price: 1000
    },
    {
      id: 2,
      name: 'Product 2',
      price: 2000
    }
  ])
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
})

//params by url
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json(
    {
      categoryId,
      productId
    }
  )
})

app.listen(port, () => {
  console.log("Port: " + port);
})
