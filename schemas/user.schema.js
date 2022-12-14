const Joi = require('joi');

//hacer un schema para cada campo, es reutilizable

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const address = Joi.string().min(3).max(15);

const createUserSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    address: address.required()
});

const updateUserSchema = Joi.object({
    name: name,
    lastName: lastName,
    address: address
});

const getUserSchema = Joi.object({
    id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }