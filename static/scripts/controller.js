Twitter.module('app', function(app, Twitter, Backbone, Marionette, $, _) {
    'use strict';

    app.Controller = Marionette.Controller.extend({
        bootstrap: function() {
            console.log('bootstrap');
        }
    });
});
