const express = require('express');
const routerApi = require('./routes');

//Middleware
const { logError, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

//middleware JSON
app.use(express.json());

//Routers
routerApi(app);

//Middleware
app.use(logError);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello, my server in express');
})

app.listen(port, () => {
  console.log("Port: " + port);
})