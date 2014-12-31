'use strict';

/* Services */

var rememberthatServices = angular.module('rememberthatServices', ['ngResource']);

rememberthatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('http://tipolitoflapp:8888/wp-json/posts/', {}, {
      //query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      query: {method:'GET', params:{}, isArray:true}
    });
  }]) ;
