

const router = require('express').Router();
const db = require('APP/db');
const passport = require('passport');

router.post('/', (req, res, next) => {

  console.log( req.body + " register hit");

  db.model('users').create(req.body)
      .then(user => {
        req.login(user, err => {
          if (err) next(err);
          res.status(201).send(user);
        });
    })
    .catch(next);
});

module.exports = router;
