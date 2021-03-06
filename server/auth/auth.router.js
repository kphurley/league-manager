'use strict';

var router = require('express').Router();

var HttpError = require('./HttpError');
var User = require('../db/models/user.model');

router.post('/login', function (req, res, next) {

  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) throw HttpError(401);
    req.login(user, function (err) {
      if (err) next(err);
      else res.json(user);
    });
  })
  .catch(next);
});

router.post('/signup', function (req, res, next) {
  User.create(req.body)
  .then(function (user) {
    req.login(user, function (err) {
      if (err) next(err);
      else res.status(201).json(user);
    });
  })
  .catch(next);
});

router.get('/me', function (req, res, next) {
  res.json(req.user);
});

router.delete('/me', function (req, res, next) {
  req.logout();
  res.status(204).end();
});

/*router.use('/google', require('./google.oauth'));

router.use('/twitter', require('./twitter.oauth'));

router.use('/github', require('./github.oauth'));*/

module.exports = router;
