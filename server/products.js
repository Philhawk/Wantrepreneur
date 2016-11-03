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

const {mustBeAdmin, mustBeLoggedIn} = epilogue.filters;
products.delete.auth(mustBeLoggedIn);
products.delete.auth(mustBeAdmin);
products.update.auth(mustBeLoggedIn);
products.update.auth(mustBeAdmin);
products.create.auth(mustBeAdmin);
products.create.auth(mustBeAdmin);

module.exports = productRoutes;
