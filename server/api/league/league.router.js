//league.router.js
'use strict';

var router = require('express').Router();

var HttpError = require('../../auth/HttpError');
var League = require('../../db/models').League;
var Season = require('../../db/models').Season;
var Auth = require('../../auth/auth.middleware');

router.param('id', function (req, res, next, id) {
  League.findById(id)
  .then(function (league) {
    if (!league) throw HttpError(404);
    req.requestedLeague = league;
    next();
  })
  .catch(next);
});

router.get('/', Auth.assertAdmin, function (req, res, next) {
  League.findAll({})
  .then(function (leagues) {
    res.json(leagues);
  })
  .catch(next);
});

router.post('/', Auth.assertAdmin, function (req, res, next) {
  League.create(req.body)
  .then(function (league) {
    res.status(201).json(league);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  League.findOne({
    where:
    {
      id: req.params.id
    }
  })
  .then(function (requestedLeague) {
    res.json(requestedLeague);
  })
  .catch(next);
});

router.get('/:id/seasons', function (req, res, next) {
  League.findOne({
    where:
    {
      id: req.params.id
    }
  })
  .then(function (requestedLeague) {
    return requestedLeague.getSeasons();
  })
  .then(function (seasons) {
    res.json(seasons);
  })
  .catch(next);
});

/*
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
});*/

module.exports = router;
