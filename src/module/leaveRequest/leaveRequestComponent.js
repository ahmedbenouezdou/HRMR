function leaveRequestComponent() {
    var ctrl = this;
    console.log("je suis la");
    ctrl.$onInit=function $onInit(){
        ctrl.initvar='hhh';
    };

    ctrl.addPersonne=function addPersonne(){

    }
}

angular.module('leaveRequestModule').component('leaveRequestComponent', {
    templateUrl: 'src/module/leaveRequest/leaveRequest.html',
    controller: leaveRequestComponent
});