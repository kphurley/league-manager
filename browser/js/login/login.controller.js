'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory, $state) {

  $scope.login = function(credentials) {

    AuthFactory.login(credentials)
    .then(function() {
      $state.go('league');
    });
  }
});
