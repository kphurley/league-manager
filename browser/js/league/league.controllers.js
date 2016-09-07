//league.controller.js
app.controller('CreateLeagueCtrl', function($scope, LeagueFactory, $state) {

  $scope.createLeague = function(leagueName) {
    LeagueFactory.createLeague(leagueName)
    .then(function(league) {
      $state.go('league');
    })
  }
});

app.controller('LeagueCtrl', function($scope, leagues) {

  $scope.leagues = leagues;

});

app.controller('ManageLeagueCtrl', function($scope, league, seasons) {
  $scope.league = league;
  $scope.seasons = seasons;
  $scope.hasSeasons = function() { return $scope.seasons.length > 0 }
})
