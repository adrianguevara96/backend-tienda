const express = require('express');

//services
const UsersService = require('./services/users.service')
const service = new UsersService()
const router = express.Router();

router.get('/', (req, res) => {
  const users = service.find()
  res.json(users);
});

router.get('/:id', (req,res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
})

router.post('/', (req, res) => {
  //body
  const body = req.body;
  const newUser = service.create(body);
  //response
  res.json({
    message: "user added",
    data: newUser
  })
})

router.patch('/:id', (req, res) => {
  //params
  const { id } = req.params;
  //receive data
  const body = req.body;
  const user = service.update(id, body);
  //response
  res.json({
    message: 'user updated',
    data: user,
    id
  })
});

router.delete('/:id', (req, res) => {
  //params
  const { id } = req.params;
  //receive data
  const user = service.delete(id);
  //response
  res.json({
    message: 'user deleted',
    data: user
  })
})

module.exports = router;

