//league.controller.js
app.controller('CreateLeagueCtrl', function($scope, LeagueFactory, $state) {

  $scope.createLeague = function(leagueName) {
    LeagueFactory.createLeague(leagueName)
    .then(function(league) {
      $state.go('home');
    })
  }
});

/*app.controller('LeagueCtrl', function($scope, $rootScope, leagues) {

  $rootScope.leagues = leagues;

});*/

app.controller('ManageLeagueCtrl', function($scope, league, seasons, $state) {
  $scope.league = league;
  $scope.seasons = seasons;
  $scope.hasSeasons = function() { return $scope.seasons.length > 0 }
  $scope.createSeason = function() {
    $state.go('createSeason', {id: league.id});
  }
})
