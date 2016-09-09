'use strict';

var router = require('express').Router();

var HttpError = require('../../auth/HttpError');
var User = require('../../db/models').User;
var Auth = require('../../auth/auth.middleware');

router.param('id', function (req, res, next, id) {
  User.findById(id)
  .then(function (user) {
    if (!user) throw HttpError(404);
    req.requestedUser = user;
    next();
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.requestedUser.reload()
  .then(function (requestedUser) {
    res.json(requestedUser);
  })
  .catch(next);
});

router.put('/:id', Auth.assertAdminOrSelf, function (req, res, next) {
  if (Auth.isSelf(req)) delete req.body.isAdmin;
  req.requestedUser.update(req.body)
  .then(function (user) {
    res.json(user);
  })
  .catch(next);
});

router.delete('/:id', Auth.assertAdminOrSelf, function (req, res, next) {
  req.requestedUser.destroy()
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
