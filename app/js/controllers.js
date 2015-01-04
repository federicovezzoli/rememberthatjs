'use strict';

/* Controllers */

var rememberthatControllers = angular.module('rememberthatControllers', []);

//do a basic query, get 10 latest libraries entry
rememberthatControllers.controller('RememberthatCtrl', ['$scope', 'Entry',
  function($scope, Entry) {

	//$scope.itemsPerPage = 5; /* set in wp no need to overwrite it right now */
	$scope.currentPage = 1;

	//print results
	$scope.printResults = function(){
		$scope.entries = Entry.query({page: $scope.currentPage}, function(l,getResponseHeaders){
	    	//console.log(getResponseHeaders("X-WP-TotalPages"));
			$scope.totalPages = getResponseHeaders("X-WP-TotalPages");
			$scope.totalArticles = getResponseHeaders("X-WP-Total");
		});
	};


	//pagination


	//update pagination
	$scope.updatePagination = function(newPage){
		$scope.currentPage = newPage;
		$scope.printResults();
	};

	//init
	if ($scope.currentPage === 1) {
		$scope.printResults();
	}

 }]);

 //retrieve the categories
 rememberthatControllers.controller('RememberthatCategories', ['$scope', 'Category',
  function($scope, Category) {
    $scope.categories = Category.query();
 }]);