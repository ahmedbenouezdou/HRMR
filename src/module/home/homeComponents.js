function homeController() {
    var ctrl = this;

    ctrl.$onInit=function $onInit(){
        ctrl.viewDetailRTT=false;
        ctrl.viewDetailLeave=false;




        ctrl.elementDonut= 'morris-donut-chart';
            ctrl.data= [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }];
        ctrl.resize= true;
    };

    ctrl.viewDetailsRTT=function viewDetailsRTT(){
        ctrl.viewDetailRTT=!ctrl.viewDetailRTT;
    };

    ctrl.viewDetailsLeave=function viewDetailsLeave(){
        ctrl.viewDetailLeave=!ctrl.viewDetailLeave;
    }
}

angular.module('homeModule').component('homeComponent', {
    templateUrl: 'src/module/home/home.html',
    controller: homeController,
    controllerAs: 'ctrl'

});