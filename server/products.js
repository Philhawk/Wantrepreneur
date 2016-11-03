'use strict';

const epilogue = require('./epilogue');
const db = require('APP/db');

const productRoutes = require('express').Router();

const products = epilogue.resource({
  model: db.model('products'),
  endpoints: ['/products', '/products/:id'],
  include: [{
    model: db.model('categories')
  }]
});

module.exports = productRoutes;
