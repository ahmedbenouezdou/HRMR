function leaveRequestComponent() {
    var ctrl = this;
    console.log("je suis la");
    ctrl.$onInit = function $onInit() {
        ctrl.initvar = 'hhh';
        ctrl.motifConge = [
            {titre: 'RTT', codeMotif: 0},
            {titre: 'Congés Payés', codeMotif: 0},
            {titre: 'Congés Exceptionnels', codeMotif: 0},
            {titre: 'Intercontrat', codeMotif: 0},
            {titre: 'Autres Absences', codeMotif: 0},
            {titre: 'Formation', codeMotif: 0},
            {titre: 'Maladie', codeMotif: 0}
        ]
    };

    ctrl.addPersonne = function addPersonne() {

    }
}

angular.module('leaveRequestModule').component('leaveRequestComponent', {
    templateUrl: 'src/module/leaveRequest/leaveRequest.html',
    controller: leaveRequestComponent
});