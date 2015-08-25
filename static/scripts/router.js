Twitter.module('app', function(app, Twitter, Backbone, Marionette, $, _) {
    'use strict';
    app.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            'test': 'bootstrap'
        },
        controller: app.Controller
    });
});
