app.directive('sidebar', function ($rootScope, LeagueFactory, AuthFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/sidebar/sidebar.html'
  }
});
