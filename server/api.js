'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/categories', require('./categories'))
  .use('/logout', require('./logout'))
  .use('/checkout', require('./checkout'))
  .use('/orders', require('./orders'))
  .use('/register', require('./register'));


// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
