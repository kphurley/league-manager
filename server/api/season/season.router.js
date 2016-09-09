//season.router.js
var router = require('express').Router();

var HttpError = require('../../auth/HttpError');
var Team = require('../../db/models').Team;
var Season = require('../../db/models').Season;
var Auth = require('../../auth/auth.middleware');
var Promise = require('bluebird');

router.param('id', function (req, res, next, id) {
  Season.findById(id)
  .then(function (season) {
    if (!season) throw HttpError(404);
    req.requestedSeason = season;
    next();
  })
  .catch(next);
});

router.get('/:id', Auth.assertAdmin, function (req, res, next) {
  req.requestedSeason.reload({include: [Team]})
  .then(function (requestedSeason) {
    res.json(requestedSeason);
  })
  .catch(next);
});

router.get('/:id/teams', Auth.assertAdmin, function (req, res, next) {
  req.requestedSeason.reload({include: [Team]})
  .then(function (requestedSeason) {
    return requestedSeason.getTeams();
  })
  .then(function (teams) {
    res.json(teams);
  })
  .catch(next);
});

router.post('/:id/teams', Auth.assertAdmin, function (req, res, next) {

  Promise.all([Team.create(req.body), req.requestedSeason.reload()])
  .spread(function(team, season) {
    var joinTableName = season.name + ' - ' + team.name;
    return season.addTeam(team, {name: joinTableName});
  })
  .then(function(season) {
    res.json(season);
  })
  .catch(next);

});

module.exports = router;
