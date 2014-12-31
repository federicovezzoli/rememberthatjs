define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/users.html'),

        template = _.template(tpl);
    
    //utenti
  	var Users = Backbone.Collection.extend({
	  	url: '/api/get_author_index/'
  	});

    return Backbone.View.extend({

        render: function () {
        	
            //this.$el.html(template());
            //return this;
            
            var that = this;
			var users = new Users(users);
			users.fetch({
       			success: function(){
       				users = users.toJSON();
	   				users = users[0].authors;
	   				//console.log(users);
	   				var template = _.template(tpl,{users: users});
	   				that.$el.html(template);
	   			}
	   		});
        }

    });

});
