//league.router.js
'use strict';

var router = require('express').Router();

var HttpError = require('../../auth/HttpError');
var League = require('../../db/models').League;
var Season = require('../../db/models').Season;
var Auth = require('../../auth/auth.middleware');
var Promise = require('bluebird');

router.param('id', function (req, res, next, id) {
  League.findById(id)
  .then(function (league) {
    if (!league) throw HttpError(404);
    req.requestedLeague = league;
    next();
  })
  .catch(next);
});

//GET ALL LEAGUES
router.get('/', Auth.assertAdmin, function (req, res, next) {
  League.findAll({})
  .then(function (leagues) {
    res.json(leagues);
  })
  .catch(next);
});

//CREATE NEW LEAGUE
router.post('/', Auth.assertAdmin, function (req, res, next) {
  League.create(req.body)
  .then(function (league) {
    res.status(201).json(league);
  })
  .catch(next);
});

//GET LEAGUE BY ID
router.get('/:id', Auth.assertAdmin, function (req, res, next) {
  req.requestedLeague.reload({include: [Season]})
  .then(function (requestedLeague) {
    res.json(requestedLeague);
  })
  .catch(next);
});

//GET ALL SEASONS ASSOCUATED WITH A PARTICULAR LEAGUE
router.get('/:id/seasons', Auth.assertAdmin, function (req, res, next) {
  req.requestedLeague.reload({include: [Season]})
  .then(function (requestedLeague) {
    return requestedLeague.getSeasons();
  })
  .then(function (seasons) {
    res.json(seasons);
  })
  .catch(next);
});

//CREATE A NEW SEASON IN A LEAGUE WITH THE GIVEN ID
//TODO - THIS MIGHT BE OK FOR A LEAGUE ADMIN TO USE (vs. A SUPER ADMIN)
router.post('/:id/seasons', Auth.assertAdmin, function (req, res, next) {

  Promise.all([Season.create(req.body), req.requestedLeague.reload()])
  .spread(function(season, league) {
    return league.addSeason(season);
  })
  .then(function(season) {
    res.json(season);
  })
  .catch(next);

});

module.exports = router;
