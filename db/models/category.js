'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('categories', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350',
    validate: {
      isUrl: true
    }
  }
});

module.exports = Category;
