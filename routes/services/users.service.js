const faker = require('faker');
const boom = require('@hapi/boom');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;

    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address: faker.address.cityName(),
      })
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(id) {
    const user = this.users.find( item => item.id === id);

    if (!user) {
      throw boom.notFound('Product not found');
    }

    return user;
  }

  update(id, changes) {
    const index = this.users.findIndex( item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex( item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    this.users.splice(index,1);
    return {
      id: id
    }
  }
}

module.exports = UsersService;
