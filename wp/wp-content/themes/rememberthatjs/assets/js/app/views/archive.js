define(function(require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/category.html'),
        models              = require('app/models/element'),
        //users = '',

        template = _.template(tpl);
    
    //collection    
    var archiveCollection = Backbone.Collection.extend({
	    //initialize the collection with the slug name
	    initialize: function(options){
	    	this.slug = options.slug;
    	},
    	
    	//fetch the posts with the slug parameter
	    url: function() {
		    return '/wp_api/v1/posts/?post_type=library&category_name='+this.slug;
	    } 
    });

	//view
    return Backbone.View.extend({

        render: function () {
        	//pas the slug to the collection
        	var catSlug = this.options.slug;
        	this.elements = new archiveCollection({ slug: catSlug});
        	
            var that = this;
			that.elements.fetch({
       			success: function(){
       				that.elements = that.elements.toJSON();
	   				that.elements = that.elements[0].posts;
	   				var template = _.template(tpl,{elements: that.elements});
	   				that.$el.html(template);
	   			}
	   		});
        }

    });

});
