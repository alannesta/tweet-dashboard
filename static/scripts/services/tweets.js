angular.module('deckbuilder').factory('Tweets', ['$resource', function ($resource) {
    return $resource('/tweets/:screen_name', null, {});
}]);