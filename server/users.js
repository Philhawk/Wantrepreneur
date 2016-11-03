'use strict'

const epilogue = require('./epilogue');
const db = require('APP/db');

const customUserRoutes = require('express').Router() ;

// Custom routes go here.

module.exports = customUserRoutes;

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
});

const {mustBeLoggedIn, mustBeAdmin, selfOnly, forbidden} = epilogue.filters;
users.delete.auth(mustBeLoggedIn);
users.delete.auth(selfOnly);
users.list.auth(mustBeLoggedIn);
users.list.auth(mustBeAdmin);
users.read.auth(mustBeLoggedIn);
users.read.auth(selfOnly);
