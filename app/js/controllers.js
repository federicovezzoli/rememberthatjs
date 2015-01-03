'use strict';

/* Controllers */

var rememberthatControllers = angular.module('rememberthatControllers', []);

//do a basic query, get 10 latest libraries entry
rememberthatControllers.controller('RememberthatCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
 }]);

 //retrieve the categories
 rememberthatControllers.controller('RememberthatCategories', ['$scope', 'Category',
  function($scope, Category) {
    $scope.categories = Category.query();
 }]);