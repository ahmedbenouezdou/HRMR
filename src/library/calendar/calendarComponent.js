function calendarController($uibModal, $log, $document) {
    var ctrl = this;

    var previousValueMonth, previousValueEvents;

    ctrl.$onInit = function () {
        ctrl.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        initMonth();
    };


    this.$doCheck = function () {
        var currentValueMonth = ctrl.monthevents.month;
        if (previousValueMonth !== currentValueMonth) {
            console.log('doCheck: Month: ' + ctrl.monthevents.month);
            previousValueMonth = currentValueMonth;
            initMonth();
        }
        var currentValueEvents = ctrl.monthevents.events.length;
        if (previousValueEvents !== currentValueEvents) {
            console.log('doCheck: events: ' + ctrl.monthevents.events.length);
            previousValueEvents = currentValueEvents;
            initMonth();
        }
    };


    function initMonth() {
        var nbDayMonth = workingDayWorked(ctrl.monthevents.month, false);
        ctrl.calendarMonth = [];

        console.log(ctrl.monthevents);

        var Base = new Date(ctrl.monthevents.years, ctrl.monthevents.month, 1);

        var weekDay = [];
        for (var i = 0; i < nbDayMonth; i++) {

            var dateEvent = new Date(new Date(Base).setDate(Base.getDate() + i));
            if (dateEvent.getDay() === 1) {
                weekDay = [];
            }

            var infoActivite = colorCssFunc(dateEvent.getDay(), dateEvent.getDate());

            weekDay.push({
                date: dateEvent,
                nbjour: dateEvent.getDay(),
                day: i + 1,
                classCss: infoActivite.css,
                title: infoActivite.title,
                indexOrg: infoActivite.index
            });


            if (dateEvent.getDay() === 0) {
                var weekDayLength = angular.copy(weekDay.length);
                if (weekDay.length != 7) {
                    for (var iDateWeek = 0; iDateWeek < (7 - weekDayLength); iDateWeek++) {
                        weekDay.splice(iDateWeek, 0, {date: '', nbjour: '', day: '', classCss: 'noactivitie'});
                    }
                    ctrl.calendarMonth.push(weekDay);
                } else {

                    ctrl.calendarMonth.push(weekDay);
                }

            } else if ((i + 1) === nbDayMonth && dateEvent.getDay() !== 0) {
                ctrl.calendarMonth.push(weekDay);
            }
        }
    }

    function colorCssFunc(nbjour, indexJour) {
        switch (nbjour) {
            case 0:
            case 6:
                return 'weekEnd';
                break;
            default :
                var active = {css: "noactivitie", title: '', index: ''};

                ctrl.monthevents.events.some(function (element, index) {
                        if ((new Date(element.startsAt).getDate() == indexJour)) {
                            switch (element.etat) {
                                case 0:
                                    active = {css: "leave", title: element.title, index: index};
                                    break;
                                case 1:
                                    active = {css: "activitie", title: element.title, index: index};

                                    break;
                            }
                            return true;
                        }
                    }
                );
                return active;
                break;
        }
    }

    ctrl.removeActivities = function removeActivities(index) {

        console.log(ctrl.monthevents.events);
    };

    ctrl.showModal = function (indexParent, index) {
        if (ctrl.calendarMonth[indexParent][index].classCss === "activitie") {
             $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'src/library/calendar/myModalContent.html',
                controller: function ($scope) {
                    $scope.selected = ctrl.calendarMonth[indexParent][index];

                    $scope.validModif = function () {
                        ctrl.monthevents.events[ctrl.calendarMonth[indexParent][index].indexOrg].title = $scope.selected.title;
                    };
                    $scope.removeActivities=function removeActivities(){
                        ctrl.monthevents.events.splice(ctrl.calendarMonth[indexParent][index].indexOrg,1);

                    }
                }
            });

        }


    };
}


calendarController.$injector = ['$uibModal', '$log', '$document'];

angular.module('calendarModule', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']).component('calendarcomponent', {
    transclude: true,
    templateUrl: 'src/library/calendar/calendarView.html',
    controller: calendarController,
    controllerAs: 'ctrl',
    bindings: {
        monthevents: "="
    }
});