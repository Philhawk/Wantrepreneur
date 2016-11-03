'use strict';

const router = require('express').Router();
const db = require('APP/db');
const passport = require('passport');

router.post('/', (req, res, next) => {
  console.log('registering');
  db.model('users').create(
    Object.assign({},req.body, { role: 'user' } )
  )
    .then(user => {
      req.login(user, console.log);
      res.status(201).send();
    })
    .catch(next);
});

module.exports = router;
