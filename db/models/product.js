'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

//const productCategories = ['beauty', 'entertainment', 'fashion', 'food', 'sports', 'technology'].sort();

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350',
    validate: {
      isUrl: true
    }
  },
});

module.exports = Product;
