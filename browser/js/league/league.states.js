//league.states.js
'use strict';

app.config(function ($stateProvider) {

  $stateProvider
  /*.state('league', {
    url: '/league',
    templateUrl: '/js/league/league.template.html',
    controller: 'LeagueCtrl',
    resolve: {
      leagues: function ($http) {
        return $http.get('/api/league')
        .then(function(leagues) {
          return leagues.data;
        });
      }
    }
  })*/
  .state('createLeague', {
    url: '/createLeague',
    templateUrl: '/js/league/createLeague.template.html',
    controller: 'CreateLeagueCtrl'
  })
  .state('manageLeague', {
    url: '/manageLeague/:id',
    templateUrl: '/js/league/manageLeague.template.html',
    controller: 'ManageLeagueCtrl',
    resolve: {
      league: function($http, $stateParams) {
        return $http.get('/api/league/'+ $stateParams.id)
        .then(function(league) {
          return league.data;
        });
      },
      seasons: function($http, $stateParams) {
        return $http.get('/api/league/'+ $stateParams.id + '/seasons')
        .then(function(seasons) {
          return seasons.data;
        });
      }
    }
  });

});
