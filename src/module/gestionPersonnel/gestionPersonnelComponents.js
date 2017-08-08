function gestionPersonnelController() {
    var ctrl = this;
    console.log("je suis la");
    ctrl.$onInit=function $onInit(){
        ctrl.initvar='hhh';
    };

    ctrl.addPersonne=function addPersonne(){

    }
}

angular.module('gestionPersonnelModule').component('gestionPersonnelComponent', {
    templateUrl: 'src/module/gestionPersonnel/gestionPersonnel.html',
    controller: gestionPersonnelController
});