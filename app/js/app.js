'use strict';

/* App Module */

var rememberthatApp = angular.module('rememberthatApp', [
  'ngRoute',
  'phonecatAnimations',

  'rememberthatControllers',
  'phonecatFilters',
  'rememberthatServices'
]);

rememberthatApp.config(['$routeProvider',

  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });

  }
]);
