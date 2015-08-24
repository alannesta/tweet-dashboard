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

        $scope.order = {
            AppDirect: $scope.config.order.indexOf('AppDirect') + 1,
            laughingsquid: $scope.config.order.indexOf('laughingsquid') + 1,
            techcrunch: $scope.config.order.indexOf('techcrunch') + 1
        };

        $scope.save = function() {
            if(validateColumnOrder()){
                layoutConfig.saveConfig($scope.config);
                $scope.$emit('refresh');
            }
        };

        function validateColumnOrder() {
            if(validateDups($scope.order)) {
                $scope.config.order = [];
                for (var i = 1; i < 4; i++) {
                    $scope.config.order.push(getKeyByValue($scope.order, i));
                }
                return true;
            } else {
                alert('please set the correct column order, no duplicates...');
                return false;
            }
        }

        function validateDups(obj) {
            console.log(obj);
            var values = [];
            var dups = [];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                   values.push(obj[prop]);
                }
            }

            values.forEach(function(val){
                if (dups.indexOf(val) < 0) {
                    dups.push(val);
                }
            });
            return values.length === dups.length;
        }

        function getKeyByValue(obj, value) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    if (obj[prop] === value)
                        return prop;
                }
            }
        }
    }]);

