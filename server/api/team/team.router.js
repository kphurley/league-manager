//team.router.js
//season.router.js
'use strict';

var router = require('express').Router();

var HttpError = require('../../auth/HttpError');
var Team = require('../../db/models').Team;
var Season = require('../../db/models').Season;
var Auth = require('../../auth/auth.middleware');

router.param('id', function (req, res, next, id) {
  Team.findById(id)
  .then(function (team) {
    if (!team) throw HttpError(404);
    req.requestedTeam = team;
    next();
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.requestedTeam.reload()
  .then(function (requestedTeam) {
    res.json(requestedTeam);
  })
  .catch(next);
});

module.exports = router;
