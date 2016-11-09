'use strict';

const router = require('express').Router();
const Promise = require('sequelize').Promise;
const { Product, Order, User } = require('../db/models');

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
  let createdOrder;
  let createdProducts;
  let productsOrder;

  Order.create({})
    .then(order => {
      createdOrder = order;
      return Promise.map(req.body.cart, product => Product.findById(product.id));
    })
    .then(products => {
      createdProducts = products;
      return createdOrder.setProducts(products);
    })
    .then((order) => {
      productsOrder = order;
      if (req.user) { return User.findById(req.user.id) }
      return Promise.resolve(null);
    })
    .then(user => {
      if (user) { return createdOrder.setUser(user); }
      return Promise.resolve(null);
    })
    .then(() => productsOrder.hash())
    .then(() => Order.findById(createdOrder.id))
    .then((hashedOrder) => {
      res.status(201).send(hashedOrder);
    })
    .catch(next);
});

module.exports = router;
