'use strict';

/* Services */

var rememberthatServices = angular.module('rememberthatServices', ['ngResource']);

//Entries
rememberthatServices.factory('Entry', ['$resource',
  function($resource){
    return $resource('http://rememberthatjs:8888/wp/wp-json/posts/', {}, {
    	query: {method:'GET', params:{'type':'library','page': ':page'}, isArray:true}
    });
  }]) ;

 //Categories
rememberthatServices.factory('Category', ['$resource',
  function($resource){
    return $resource('http://rememberthatjs:8888/wp/wp-json/posts/types/library/taxonomies/category/terms', {}, {
    	query: {method:'GET', params:{}, isArray:true}
    });
}]) ;
