'use strict';

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-as-promised');
const _ = require('lodash');
const db = require('APP/db');

const orderStatuses = ['pending', 'complete'];

const Order = db.define('orders', {
  orderId: {
    type: Sequelize.STRING
  }
},
{
  instanceMethods: {
    hash: function() {
      return this.getProducts()
        .then(products => {
          const productsList = _.join(products);
          return bcrypt.hash(productsList, 10);
        })
        .then(hash => {
          return this.update({ 'orderId': hash });
        })
        .catch(console.error);
    }
  },
  classMethods: {
    findByOrderId: function(orderId) {
      return Order.findOne({
        where: {
          orderId
        },
        include: [{
          model: db.model('products')
        }]
      });
    }
  }
});

module.exports = Order;
