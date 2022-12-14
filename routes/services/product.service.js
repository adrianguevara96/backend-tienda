const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;

    for (let i = 0; i < limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async create(data) {
    console.log(data)
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise( (res, reject) => {
      setTimeout(() => {
        res(this.products)
      }, 5000);
    })
  }

  async findOne(id) {
    const product = this.products.find( item => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }

    if(product.isBlock) {
      throw boom.conflict('product is block')
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex( item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex( item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    this.products.splice(index,1);
    return {
      id: id,
      message: `Product with id ${id} was deleted`
    }
  }
}

module.exports = ProductsService;
