'use strict';

const ForbiddenError = require('epilogue').Errors.ForbiddenError;
const orderRoutes = require('express').Router();
const db = require('APP/db');

orderRoutes.get('/thanks', (req, res, next) => {
  db.model('orders').findByOrderId(req.query.orderId)
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

orderRoutes.put('/:orderId', (req, res, next) => {
  if (req.user && req.user.roles === 'admin') {
    db.model('orders').update(req.body, {
      where: { id: req.params.orderId },
      returning: true
    })
      .then(updatedOrder => {
        if (updatedOrder) res.sendStatus(204)
        else res.json("Order does not exist")
      })
      .catch(next);
  } else {
    next(new ForbiddenError('You must be an admin to access this page.'));
  }
});

orderRoutes.delete('/:orderId', (req, res, next) => {
  if (req.user && req.user.roles === 'admin') {
    db.model('orders').destroy({
      where: {id: req.params.orderId}
    })
      .then(numDeleted => {
        if (numDeleted) res.sendStatus(204)
        else res.json("Order does not exist")
      })
      .catch(next);
  } else {
    next(new ForbiddenError('You must be an admin to access this page.'));
  }
});


module.exports = orderRoutes;
