angular
    .module('deckbuilder')
    .controller('PlaygroundController', ['$scope', 'Tweets', '$document', function ($scope, Tweets, $document) {
        //$scope.appdirect_tweets = new Tweets();

        Tweets.get({
            screen_name: 'AppDirect'
        }, function (result) {
            $scope.appdirect_tweets = result.tweets;
        });

        Tweets.get({
            screen_name: 'laughingsquid'
        }, function (result) {
            $scope.laughingsquid_tweets = result.tweets;
        });

        Tweets.get({
            screen_name: 'techcrunch'
        }, function (result) {
            $scope.techcrunch_tweets = result.tweets;
        });

        $scope.title = 'it works';
    }]);

