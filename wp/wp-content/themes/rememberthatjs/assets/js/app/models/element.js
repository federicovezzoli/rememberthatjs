define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

         //Elementi
		 ElementsList = Backbone.Collection.extend({
			 url: '/wp_api/v1/posts/?post_type=library'
		 });

    return {
        Elements: ElementsList
    };

});
