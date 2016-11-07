'use strict';

const router = require('express').Router();

router.post('/', (req, res, next) => {
  req.logout();
  res.status(201).send();
});

module.exports = router;
