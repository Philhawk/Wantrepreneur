'use strict';

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

module.exports = orderRoutes;
