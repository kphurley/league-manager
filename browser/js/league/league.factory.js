//league.factory.js
app.factory('LeagueFactory', function($http) {
  return {
    createLeague: function(name) {
      return $http.post('/api/league', {name: name})
      .then(function(league) {
        return league;
      })
    }
  }
})
