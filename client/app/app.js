'use strict';

angular.module('comingSoonApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });