'use strict';

/* Services */

var rememberthatServices = angular.module('rememberthatServices', ['ngResource']);

//Entries
rememberthatServices.factory('Entry', ['$resource',
  function($resource){
    return $resource('http://rememberthatjs:8888/wp/wp-json/posts/', {}, {
    	query: {method:'GET', params:{'page': ':page', 'type':'library', 'filter[cat]': ':filter[cat]'}, isArray:true}
    });
  }]);

//Categories
rememberthatServices.factory('Category', ['$resource',
  function($resource){
    return $resource('http://rememberthatjs:8888/wp/wp-json/posts/types/library/taxonomies/category/terms', {}, {
    	query: {method:'GET', params:{}, isArray:true}
    });
}]);

//Single Term
rememberthatServices.factory('Term', ['$resource',
  function($resource){
    return $resource('http://rememberthatjs:8888/wp/wp-json/posts/types/library/taxonomies/category/terms/:term', {}, {
    	query: {method:'GET', params:{}, isArray:true}
    });
}]);

//SharedService for total articles broadcasting
rememberthatServices.factory('shareArticles', ['$rootScope',
	function($rootScope){
		var sharedService = {};

		sharedService.totalArticles = 0;

		sharedService.prepForBroadcast =  function (total) {
			this.totalArticles = total;
			this.broadcastItem();
		};

		sharedService.broadcastItem = function() {
			$rootScope.$broadcast('pagesretrived');
		};

		return sharedService;
}]);
