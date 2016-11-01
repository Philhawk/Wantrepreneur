'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const orderStatuses = ['pending', 'complete']

const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM(...orderStatuses),
    defaultValue: orderStatuses[0],
  }
})

module.exports = Order
