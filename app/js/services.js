'use strict';

/* Services */

var rememberthatServices = angular.module('rememberthatServices', ['ngResource']);

rememberthatServices.factory('Phone', ['$resource',
  function($resource){
	 console.log();
    return $resource('http://rememberthatjs:8888/wp/wp-json/posts/:libraryID', {}, {
      //query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      query: {method:'GET', params:{'type':'library'}, isArray:true}

      //query: {method:'GET', params:{}, isArray:true}
    });
  }]) ;
