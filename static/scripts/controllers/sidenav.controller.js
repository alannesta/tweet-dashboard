angular
    .module('deckbuilder')
    .controller('SideNavController', ['$scope', 'layoutConfig', function($scope, layoutConfig) {
        console.log('sidenav init');
        //$scope.$on('destroy', function() {
        //    console.log('destroy');
        //});
        //var sample = {
        //    count: {
        //        AppDirect: 5,
        //        laughingsquid: 5,
        //        techcrunch: 5
        //    },
        //    date: "undefined",
        //    order: ['laughingsquid', 'AppDirect', 'techcrunch']
        //};
        //
        //$scope.config = {
        //    order: ['AppDirect', 'laughingsquid', 'techcrunch'],
        //    count: {
        //        AppDirect: 1,
        //        laughingsquid: 2,
        //        techcrunch: 3
        //    },
        //    date: 'undefined'
        //};

        $scope.config = layoutConfig.getConfig();
        console.log($scope.config);

        $scope.save = function() {
            layoutConfig.saveConfig($scope.config);
            $scope.$emit('refresh');
        };
        //console.log($scope.layoutConfig);
    }]);

