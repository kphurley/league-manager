'use strict';

//DEFINE ASSOCIATIONS HERE

var User = require('./user.model');
var Season = require('./season.model');
var Team = require('./team.model');
var Player = require('./player.model');
var TeamSeason = require('./teamSeason.model');
var Game = require('./game.model');
var TeamGameStat = require('./team.game.stat.model');
var PlayerGameStat = require('./player.game.stat.model');
var League = require('./league.model');
var Role = require('./role.model');

//TODO - MAY NEED TO CHANGE THIS TO MANY TO MANY ONCE MULTIPLE LEAGUES SUPPORTED
League.hasMany(User);

League.hasMany(Season);

User.belongsToMany(Role, {through: 'user_role'});
Role.belongsToMany(User, {through: 'user_role'});

Season.belongsToMany(Team, {through: 'teamSeason'});
Team.belongsToMany(Season, {through: 'teamSeason'});
TeamSeason.belongsToMany(Player, {through: 'team_season_player'});
Player.belongsToMany(TeamSeason, {through: 'team_season_player'});

Season.hasMany(Game);
Game.hasMany(TeamGameStat);
Game.hasMany(PlayerGameStat);

Player.belongsToMany(PlayerGameStat, {through: 'player_playergamestat'});
PlayerGameStat.belongsToMany(Player, {through: 'player_playergamestat'});
Team.belongsToMany(TeamGameStat, {through: 'team_teamgamestat'});
TeamGameStat.belongsToMany(Team, {through: 'team_teamgamestat'});

module.exports = {
  User,
  Season,
  Team,
  Player,
  TeamSeason,
  Game,
  TeamGameStat,
  PlayerGameStat,
  League,
  Role
};
