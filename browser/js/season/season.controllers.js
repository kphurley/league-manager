app.controller('createSeasonCtrl', function($scope, LeagueFactory, $state, league) {
  $scope.league = league;
  $scope.createSeason = function(seasonName) {
    LeagueFactory.createSeason(seasonName, $scope.league.name, $scope.league.id)
    .then(function(updatedSeasons) {
      $state.go('manageLeague', {id: $scope.league.id});
    })
  }
});

app.controller('seasonCtrl', function($scope, season, teams, $state) {

  $scope.season = season;
  $scope.teams = teams;
  $scope.hasTeams = function() { return $scope.teams.length > 0; }
  $scope.findOrCreateTeam = function() {
    $state.go('createTeam', {id: season.id});
  }
  $scope.hasGames = function() { return false; }  //placeholder, obviously
  $scope.hasTeamStats = function() { return false; }  //placeholder, obviously
  $scope.hasPlayerStats = function() { return false; }  //placeholder, obviously
});
