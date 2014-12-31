define(function(require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/recent.html'),
        models              = require('app/models/element'),

        template = _.template(tpl);

    return Backbone.View.extend({
    	
    	initialize: function() {
	    	this.elements = new models.Elements();
    	},
    	
    	events: {
			 'click .btn-category' : 'openArchive'

		},

		openArchive: function(event){
			event.preventDefault();
        	//open the archive view
        	var button = $(event.currentTarget);
        	Backbone.history.navigate("//archive/"+button.attr("href"),true);
        	
		},

        render: function () {
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
