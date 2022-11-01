const productsRouter = require('./products');
const categoriesRouter = require('./categories');

function routerApi(app) {
  //routers
  app.use('/api/products', productsRouter);
  app.use('/api/categories', categoriesRouter);
}

module.exports = routerApi;
