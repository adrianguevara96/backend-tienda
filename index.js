const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

//Routers
routerApi(app);

app.get('/', (req, res) => {
  res.send('Hello, my server in express');
})

app.listen(port, () => {
  console.log("Port: " + port);
})
