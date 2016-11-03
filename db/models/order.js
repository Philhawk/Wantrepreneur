'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const orderStatuses = ['pending', 'complete'];

const Order = db.define('orders', {});

module.exports = Order;
