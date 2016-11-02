'use strict';

const epilogue = require('./epilogue');
const db = require('APP/db');

const productRoutes = require('express').Router();

// const products = epilogue.resource({
//   model: db.model('products'),
//   endpoints: ['/products']
  // include: [{
  //   model: db.model('categories')
  // }]
// });

productRoutes.get ('/', (req, res, next) => {
  db.model('products').findAll({
    include: [{
      model: db.model('categories')
    }]
  })
    .then(products => res.json(products))
    .catch(next);
});

module.exports = productRoutes;
