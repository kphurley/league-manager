app.controller('MainCtrl', function($scope, LeagueFactory) {
  $scope.leagues = LeagueFactory.getLeagues();
})
