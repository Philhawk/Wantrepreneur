'use strict';

const router = require('express').Router();
const db = require('APP/db');
const passport = require('passport');

router.post('/', (req, res, next) => {
  db.model('users').create(
    Object.assign({},req.body, { role: 'user' } )
  )
    .then(user => {
      req.login(user, next);
      res.status(201).send();
    })
    .catch(next);
});

module.exports = router;
