'use strict';

describe('Dashboard Controller Test', function () {

    var $controller;
    var $rootScope;
    var $q;
    var controller;
    var scope;
    var layoutConfig;

    beforeEach(angular.mock.module('twitter-dashboard'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _layoutConfig_) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        $controller  = _$controller_;
        scope = $rootScope.$new();
        layoutConfig = _layoutConfig_;
        spyOn(layoutConfig, 'saveConfig');
    }));

    it('should correctly validate column orders', function(){
        scope.config = {
            count: {
                AppDirect: 10,
                laughingsquid: 10,
                techcrunch: 10
            },
            date: "undefined",
            order:['laughingsquid', 'AppDirect', 'techcrunch']
        };

        controller = $controller('SideNavController', {
            $scope: scope,
            layoutConfig: layoutConfig
        });
        scope.order = {
            AppDirect: 2,
            laughingsquid: 2,
            techcrunch: 1
        };
        $rootScope.$digest();
        scope.save();
        expect(layoutConfig.saveConfig).not.toHaveBeenCalled();
    });
});