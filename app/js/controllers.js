'use strict';

/* Controllers */

var rememberthatControllers = angular.module('rememberthatControllers', []);

//do a basic query, get 10 latest libraries entry
rememberthatControllers.controller('RememberthatCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
  }]);

//do a basic query, get the detail of the post
rememberthatControllers.controller('RememberthatDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({libraryID: $routeParams.libraryID}, function(phone) {
      //$scope.mainImageUrl = phone.images[0];
    });

    /* $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    } */
  }]);
