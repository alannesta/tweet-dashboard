angular.module('deckbuilder').service('layoutConfig', function () {
    var self = this;
    var defaultConfig =  {
        count: {
            AppDirect: 5,
            laughingsquid: 5,
            techcrunch: 5
        },
        date: "undefined",
        order:['laughingsquid', 'AppDirect', 'techcrunch']
    };

    self.getConfig = function() {
        return JSON.parse(window.localStorage.getItem('config')) || defaultConfig;
    };

    self.saveConfig = function(config) {
        if (validate(config)) {
            window.localStorage.setItem('config', JSON.stringify(config));
        }
    };

    function validate(config) {
        return true;
    }
});