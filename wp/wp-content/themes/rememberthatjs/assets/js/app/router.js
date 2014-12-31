define(function(require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        HomeView    = require('app/views/home'),

        $body = $('body'),
        $content = $(".page"),
        homeView = new HomeView({el: $content});
   

	//Router
    return Backbone.Router.extend({

        routes: {
            "": "home",
            "about": "about",
            "archive/:slug": "archive"
        },
		
		//Call the homepage view
        home: function () {
            homeView.delegateEvents(); // delegate events when the view is recycled
            homeView.render();
        },
        
        //Call the about view
        about: function() {

        },
        
        //Call the archive view with the slug in the options
        archive: function(slug) {
        	//require solo se necessario
        	var ArchiveView    = require('app/views/archive'),
        	archiveView = new ArchiveView({slug: slug,el: $content});
        	
	        archiveView.delegateEvents(); // delegate events when the view is recycled
            archiveView.render();
        }

    });

});
