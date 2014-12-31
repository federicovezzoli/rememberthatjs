define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        /* Users = Backbone.Model.extend({

            urlRoot: "http://remember:8888/users",

            initialize: function () {
                this.reports = new UsersList();
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }), */

         //utenti
		 UsersList = Backbone.Collection.extend({
			 url: '/api/get_author_index/'
		 });

    return {
        Users: UsersList
        //EmployeeCollection: EmployeeCollection
    };

});
