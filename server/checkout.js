'use strict';

const router = require('express').Router();
const Promise = require('sequelize').Promise;
const { Product, Order } = require('../db/models');

router.post('/validate', (req, res, next) => {
  const itemsInCart = (!req.body.cart || req.body.cart.length === 0);
  if (itemsInCart) {
    res.sendStatus(400);
  } else {
    Promise.map(req.body.cart, product => Product.findById(product.id))
      .then(products => {
        // fail if any products are invalid (i.e. product is null)
        if (products === products.filter(product => product !== null)) {
          res.send('order validated');
        } else {
          throw new Error('cart is empty');
        }
      })
      .catch(next);
  }
});

router.post('/submit', (req, res, next) => {
  console.log(req.body);
  console.log('in submit route');
  let createdOrder;
  Order.create({})
    .then(order => {
      console.log('order', order);
      createdOrder = order;
      return Promise.map(req.body.cart, product => Product.findById(product.id));
    })
    .then(products => {
      console.log('products', products);
      return createdOrder.setProducts(products);
    })
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;
