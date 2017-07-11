function homeController() {
    var ctrl = this;

    ctrl.$onInit=function $onInit(){
        ctrl.viewDetailRTT=false;
        ctrl.viewDetailLeave=false;
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