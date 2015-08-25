var Twitter = new Backbone.Marionette.Application();

Twitter.addInitializer(function(){
    new Twitter.app.Router();
    Backbone.history.start();
});

Twitter.start();