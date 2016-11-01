'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Category = require('./category')

User.hasMany(Order, { as: 'owner' });
Order.hasMany(Product)
Order.belongsTo(User)
Product.hasMany(Category)


module.exports = {
  User: User,
  Product: Product,
  Order: Order,
  Category: Caegory
}
