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
        templateUrl: 'partials/phone-list.html',
        controller: 'RememberthatCtrl'
      }).
      when('/library/:libraryID', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'RememberthatDetailCtrl'
      }).
      otherwise({
        redirectTo: '/libraries'
      });

  }
]);
