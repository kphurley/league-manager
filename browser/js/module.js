'use strict';

var app = angular.module('leaguemanager', ['ui.router']);

app.config(function($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('/auth/:provider', function () {
    window.location.reload();
  });
});

app.run(function (AuthFactory) {
  AuthFactory.refreshMe();
});

