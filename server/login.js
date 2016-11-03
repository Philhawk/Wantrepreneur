'use strict';

const router = require('express').Router();
const User = require('APP/db').model('users');
const jwt = require('jsonwebtoken');

router.post('/', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      return user.authenticate(req.body.password)
        .then(() => {
          req.session.token = jwt.sign({ email: user.email }, 'temporary secret key', {});
          return user.update({ token: req.session.token });
        });
    })
    .then(() => res.status(201).send())
    .catch(next);
});

module.exports = router;
