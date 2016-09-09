//team.controllers.js
app.controller('CreateTeamCtrl', function($scope, season, SeasonFactory, $state) {
  $scope.season = season;
  $scope.createTeam = function(teamName) {
    SeasonFactory.createTeam(teamName, $scope.season.name, $scope.season.id)
    .then(function() {
      $state.go('season', {seasonId: $scope.season.id});
    })
  }
})

app.controller('TeamCtrl', function($scope) {

})
