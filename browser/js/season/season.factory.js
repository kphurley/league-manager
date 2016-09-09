//season.factory.js
app.factory('SeasonFactory', function($http) {
  return {
    createTeam: function(name, seasonName, seasonId) {
      return $http.post('/api/season/'+ seasonId +'/teams', {name: name})
      .then(function(season) {
        return season.data;
      })
    }
  }
})
