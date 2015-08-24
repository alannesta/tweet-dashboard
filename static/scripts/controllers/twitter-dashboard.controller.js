angular
    .module('deckbuilder')
    .controller('PlaygroundController', ['$scope', 'Tweets', '$mdSidenav', 'layoutConfig', function ($scope, Tweets, $mdSidenav, layoutConfig) {

        $scope.toggleSettings = function() {
            $mdSidenav('settings').toggle();
        };

        loadConfig();
        loadTweets();

        function loadTweets() {

            Tweets.get({
                screen_name: $scope.layoutConfig.order[0],
                count: $scope.layoutConfig.count[$scope.layoutConfig.order[0]]
            }, function (result) {
                $scope.first_column_tweets = result.tweets;
            });

            Tweets.get({
                screen_name: $scope.layoutConfig.order[1],
                count: $scope.layoutConfig.count[$scope.layoutConfig.order[1]]
            }, function (result) {
                $scope.second_column_tweets = result.tweets;
            });

            Tweets.get({
                screen_name: $scope.layoutConfig.order[2],
                count: $scope.layoutConfig.count[$scope.layoutConfig.order[2]]
            }, function (result) {
                $scope.third_column_tweets = result.tweets;
            });
        }

        function loadConfig() {
            if (layoutConfig.getConfig())  {
                $scope.layoutConfig = layoutConfig.getConfig()
            } else {
                $scope.layoutConfig = defaultConfig;
                layoutConfig.saveConfig($scope.layoutConfig);
            }
        }

    }]);

