'use strict';

const ForbiddenError = require('epilogue').Errors.ForbiddenError;
const orderRoutes = require('express').Router();
const db = require('APP/db');

orderRoutes.get('/:orderId', (req, res, next) => {
  db.model('orders').findByOrderId(req.params.orderId)
    .then(order => {
      if (!order) { throw new Error('Order not found.'); }
      res.json(order);
    })
    .catch(next);
});

orderRoutes.get('/', (req, res, next) => {
  const query = {};
  console.log('req.user.roles:', req.user.roles);
  console.log('req.user', req.user);
  if (req.user && req.user.roles === 'user') {
    query.where = { user_id: req.user.id };
  }

  if (req.user) {
    db.model('orders').findAll(query)
      .then(orders => res.json(orders))
      .catch(next);
  } else {
    next(new ForbiddenError('Need to be logged in to access order history.'));
  }
});

module.exports = orderRoutes;
