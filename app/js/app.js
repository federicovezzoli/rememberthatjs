'use strict';

/* App Module */

var rememberthatApp = angular.module('rememberthatApp', [
  'ngRoute',
  'ngSanitize',
  'ui.bootstrap',

  'rememberthatAnimations',
  'rememberthatControllers',
  //'phonecatFilters',
  'rememberthatServices'
]);

rememberthatApp.config(['$routeProvider',

  function($routeProvider) {
    $routeProvider.
      when('/libraries', {
        templateUrl: 'template/library-list.html',
        controller: 'RememberthatCtrl'
      }).
      when('/category/:catid', {
        templateUrl: 'template/library-list.html',
        controller: 'RememberthatCtrlCat'
      }).
      otherwise({
        redirectTo: '/libraries'
      });

  }
]);
