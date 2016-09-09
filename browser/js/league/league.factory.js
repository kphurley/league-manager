//league.factory.js
app.factory('LeagueFactory', function($http) {
  return {
    createLeague: function(name) {
      return $http.post('/api/league', {name: name})
      .then(function(league) {
        return league.data;
      })
    },
    createSeason: function(name, leagueName, leagueId) {
      return $http.post('/api/league/'+leagueId+'/seasons', {name: leagueName + ' - ' + name})
      .then(function(seasons) {
        return seasons.data;
      })
    },
    getLeagues: function() {
      return $http.get('/api/league')
      .then(function(leagues) {
        return leagues.data;
      })
    }
  }
})
