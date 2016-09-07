//navbar.directive.js
app.directive('navbar', function (AuthFactory, $state, $location) {
  return {
    restrict: 'E',
    templateUrl: '/js/navbar/navbar.html',
    link: function (scope) {
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
      scope.logout = function () {
        return AuthFactory.logout()
        .then(function () {
          $state.go('home');
        });
      }
    }
  }
});
