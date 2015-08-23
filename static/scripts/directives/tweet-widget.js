angular.module('deckbuilder').directive('tweetWidget', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            //console.log(scope.$eval(attrs.id));
            console.log(element);
            twttr.widgets.createTweet(scope.$eval(attrs.id), element[0], {
                cards: 'hidden'
            });
        }
    }
});
