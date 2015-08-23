angular
    .module('deckbuilder')
    .controller('PlaygroundController', ['$scope', 'Tweets', '$document', function ($scope, Tweets, $document) {

        Tweets.get({
            screen_name: 'AppDirect'
        }, function (result) {
            $scope.appdirect_tweets = result.tweets;
            //console.log(result);


            //$document.find('body').append($(result.tweets));
            //twttr.widgets.load($document[0].getElementsByTagName('body'));
            //twttr.widgets.createTweet(
            //    result.id,
            //    document.getElementById('tweets-container'),
            //    {
            //        theme: 'dark'
            //    }
            //);
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

