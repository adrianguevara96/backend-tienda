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
  res.json({
    id: 1,
    name: 'Product 1',
    price: 1000
  })
})

app.listen(port, () => {
  console.log("Port: " + port);
})
