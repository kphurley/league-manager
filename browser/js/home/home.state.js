'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/js/home/home.html',
    controller: 'HomeCtrl',
    resolve: {
      leagues: function ($http) {
        return $http.get('/api/league')
        .then(function(leagues) {
          return leagues.data;
        });
      }
    }
  });
});
