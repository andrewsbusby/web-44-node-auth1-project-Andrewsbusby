// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!
const router = require('express').Router()
const User = require('./users-model');
const { restricted } = require('../auth/auth-middleware');

router.get('/', restricted, (req, res, next) => {//eslint-disable-line
  User.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => { //eslint-disable-line
      res.status(401).json({ message: 'You shall not pass!'})
    })
})

module.exports = router;