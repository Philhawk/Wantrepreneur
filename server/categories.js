'use strict';

const epilogue = require('./epilogue');
const db = require('APP/db');
const categoryRoutes = require('express').Router();

const categories = epilogue.resource({
  model: db.model('categories'),
  endpoints: ['/categories', '/categories/:id']
});

module.exports = categoryRoutes;