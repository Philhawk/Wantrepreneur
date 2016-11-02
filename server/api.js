'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

api.get('/products', (req, res, next) => {
  db.model('products').findAll({
    include: [{
      model: db.model('categories')
    }]
  })
    .then(products => {
      console.log('THIS IS WORKING')
      res.send(products)
    })
    .catch(next);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
