//season.states.js

app.config(function($stateProvider) {
  $stateProvider
  .state('createSeason', {
    url: '/createSeason/:id',
    templateUrl: '/js/season/createSeason.template.html',
    controller: 'createSeasonCtrl',
    resolve: {
      league: function($http, $stateParams) {
        return $http.get('/api/league/'+ $stateParams.id)
        .then(function(league) {
          return league.data;
        });
      }
    }
  })
  .state('season', {
    url: '/season/:seasonId',
    templateUrl: '/js/season/season.template.html',
    controller: 'seasonCtrl',
    resolve: {
      season: function($http, $stateParams) {
        return $http.get('/api/season/'+ $stateParams.seasonId)
        .then(function(season) {
          return season.data;
        });
      },
      teams: function($http, $stateParams) {
        return $http.get('/api/season/'+ $stateParams.seasonId + '/teams')
        .then(function(teams) {
          return teams.data;
        });
      }
    }
  })

})
