'use strict';

describe('Dashboard Controller Test', function () {

    var $controller;
    var $rootScope;
    var $q;
    var pController;
    var scope;

    beforeEach(angular.mock.module('twitter-dashboard'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        $controller  = _$controller_;
        scope = $rootScope.$new();

        pController = $controller('DashboardController', {
            $scope: scope
        });
    }));

    it('should set up the tests', function(){
        console.log('tests running');
    });
});