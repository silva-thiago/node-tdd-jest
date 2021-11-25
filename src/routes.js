const routes = require('express').Router()

const { User } = require('./app/models')

User.create({
  name: 'Thiago',
  email: 'thiago@email.com',
  password_hash: '139846317248',
})

module.exports = routes
