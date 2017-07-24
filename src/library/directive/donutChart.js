angular.module('barchartModule',[]).directive('donutchart', function() {

    return {

        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function($scope, element, attrs) {


            var elementDonut= $scope[attrs.elementdonut],
                data = $scope[attrs.data],
                resize = $scope[attrs.resize];

            Morris.Donut({
                element: elementDonut,
                data: data,
                resize: resize
            });

        }

    };

});
