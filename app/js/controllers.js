'use strict';

/* Controllers */

var rememberthatControllers = angular.module('rememberthatControllers', []);

//do a basic query, get 10 latest libraries entry
rememberthatControllers.controller('RememberthatCtrl', ['$scope', 'Entry', 'shareArticles',
  function($scope, Entry, shareArticles) {

	//$scope.itemsPerPage = 5; /* set in wp no need to overwrite it right now */
	$scope.currentPage = 1;
	$scope.archiveTitle = 'Latest Entries';

	//print results
	$scope.printResults = function(){
		$scope.entries = Entry.query({page: $scope.currentPage}, function(l,getResponseHeaders){
	    	//console.log(getResponseHeaders("X-WP-TotalPages"));
			$scope.totalPages = getResponseHeaders("X-WP-TotalPages");
			$scope.totalArticles = getResponseHeaders("X-WP-Total");
			console.log($scope.totalArticles);
			shareArticles.prepForBroadcast($scope.totalArticles);
		});
	};

	//update pagination
	$scope.setPage = function(newPage){
		$scope.currentPage = newPage;
	};

	//init
	if ($scope.currentPage === 1) {
		$scope.printResults();
	}

 }]);


//retrieve the category archive
rememberthatControllers.controller('RememberthatCtrlCat', ['$scope', '$routeParams', 'Entry', 'Term', 'shareArticles',
  function($scope, $routeParams, Entry, Term, shareArticles) {

  	//retrive page title
  	$scope.archiveTerm = Term.get({'term': $routeParams.catid});

	$scope.currentPage = 1;
	//print results
	$scope.printResults = function(){
		$scope.entries = Entry.query({'filter[cat]': $routeParams.catid, page: $scope.currentPage}, function(l,getResponseHeaders){
	    	//console.log(getResponseHeaders("X-WP-TotalPages"));
			$scope.totalPages = getResponseHeaders("X-WP-TotalPages");
			$scope.totalArticles = getResponseHeaders("X-WP-Total");
		});
	};

	//update pagination
	$scope.setPage = function(newPage){
		$scope.currentPage = newPage;
	};

	//init
	if ($scope.currentPage === 1) {
		$scope.printResults();
	}
}]);


 //retrieve the categories
 rememberthatControllers.controller('RememberthatCategories', ['$scope', 'Category', 'shareArticles',
  function($scope, Category, shareArticles) {
    $scope.categories = Category.query();

    $scope.$on('pagesretrived', function() {
	    $scope.totalArticles = shareArticles.totalArticles;
    });
 }]);
