//team.states.js
app.config(function($stateProvider) {
  $stateProvider
  .state('createTeam', {
    url: '/createTeam/:id',
    templateUrl: '/js/team/createTeam.template.html',
    controller: 'CreateTeamCtrl',
    resolve: {
      season: function($http, $stateParams) {
        return $http.get('/api/season/' + $stateParams.id)
        .then(function(season) {
          return season.data;
        })
      }
    }
  })
  .state('team', {
    url: '/team/:teamId',
    templateUrl: '/js/team/team.template.html',
    controller: 'TeamCtrl',
    resolve: {
      team: function($http, $stateParams) {
        return $http.get('/api/team/' + $stateParams.teamId);
      }
    }
  })
})
