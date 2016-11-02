'use strict';

const epiloque = require('./epilogue');
const db = require('APP/db');

const productRoutes = require('express').Router();

module.exports = productRoutes;

const products = epilogue.resource({
  model: db.model('products'),
  endpoints: ['/products'],
  include: [{
    model: db.model('categories')
  }]
});
