

const router = require('express').Router();
const db = require('APP/db');
const passport = require('passport');

router.post('/', (req, res, next) => {

  console.log( req.body + " register hit");

  db.model('users').create(req.body)
      .then(user => {
      req.login(user, next);
      console.log("USER returned from create" + user);
<<<<<<< HEAD
      res.status(201).send(user);
=======
      res.status(201).send(user.id);
>>>>>>> master
    })
    .catch(next);
});

module.exports = router;
