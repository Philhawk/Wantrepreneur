'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  purchasedBusinesses: {
    type: Sequelize.ARRAY(DataTypes.INTEGER),
    allowNull: false
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue : new Date()
  }

})

module.exports = Order
