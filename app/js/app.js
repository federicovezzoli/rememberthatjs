'use strict';

/* App Module */

var rememberthatApp = angular.module('rememberthatApp', [
  'ngRoute',
  'ngSanitize',

  'rememberthatAnimations',
  'rememberthatControllers',
  'phonecatFilters',
  'rememberthatServices'
]);

rememberthatApp.config(['$routeProvider',

  function($routeProvider) {
    $routeProvider.
      when('/libraries', {
        templateUrl: 'partials/library-list.html',
        controller: 'RememberthatCtrl'
      }).
      otherwise({
        redirectTo: '/libraries'
      });

  }
]);
