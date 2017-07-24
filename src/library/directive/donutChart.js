angular.module('barchartModule',[]).directive('barchart', function() {

    return {

        // required to make it work as an element
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        // observe and manipulate the DOM
        link: function($scope, element, attrs) {


            var elementDonut= $scope[attrs.elementDonut],
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
