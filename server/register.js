'use strict';

const router = require('express').Router();
const db = ('APP/db');
const passport = require('passport');

router.post('/', (req, res, next) => {
  db.model('users').create(req.body)
    .then(user => {
      req.login(user, next);
      res.status(201).send();
    })
    .catch(next);
});

module.exports = router;
