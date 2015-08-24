'use strict';

describe('Dashboard Controller Test', function () {

    var $controller;
    var $rootScope;
    var $q;
    var controller;
    var scope;
    var Tweets;

    beforeEach(angular.mock.module('twitter-dashboard'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _Tweets_) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        $controller  = _$controller_;
        scope = $rootScope.$new();
        Tweets = _Tweets_;
        spyOn(Tweets, "get").and.returnValue([{id: 1}, {id: 2}]);

    }));

    it('should set up the tests', function(){
        console.log('tests running');
        controller = $controller('DashboardController', {
            $scope: scope,
            Tweets: Tweets
        });
        expect(Tweets.get.calls.count()).toEqual(3);
    });
});