function homeController() {
    var ctrl = this;

    ctrl.$onInit=function $onInit(){
        ctrl.viewDetailRTT=false;
        ctrl.viewDetailLeave=false;


        ctrl.xkey = 'range';

        ctrl.ykeys = ['total_tasks',     'total_overdue'];

        ctrl.labels = ['Total Tasks', 'Out of Budget Tasks'];

        ctrl.myModel = [
            { range: 'January', total_tasks: 20, total_overdue: 5 },
            { range: 'January', total_tasks: 35, total_overdue: 8 },
            { range: 'January', total_tasks: 20, total_overdue: 1 },
            { range: 'January', total_tasks: 20, total_overdue: 6 }
        ];
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