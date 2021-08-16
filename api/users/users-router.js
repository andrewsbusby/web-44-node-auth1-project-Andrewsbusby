// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!
const router = require('express').Router()
const User = require('./users-model');
const { restricted } = require('../auth/auth-middleware');

router.get('/', restricted, async (req, res, next) => {//eslint-disable-line
  try{
    const user = await User.find()
    res.json(user);
  }
  catch(err) {
    next(err)
  }
})

module.exports = router;