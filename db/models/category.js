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
  icon: {
    type: Sequelize.STRING, 
    defaultValue: 'theaters'
  }
});

module.exports = Category;
