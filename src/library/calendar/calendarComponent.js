function calendarController() {
    var ctrl = this;

    var previousValue;

    ctrl.$onInit = function () {
        initMonth();
    };


    this.$doCheck = function () {
        var currentValue = ctrl.monthevents.month;
        if (previousValue !== currentValue) {
            console.log('doCheck: date mutated: ' + ctrl.monthevents.month);
            previousValue = currentValue;
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


            weekDay.push({
                date: dateEvent,
                nbjour: dateEvent.getDay(),
                day: i + 1,
                classCss: colorCssFunc(dateEvent.getDay(), dateEvent.getDate())
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
                ctrl.monthevents.events.some(function (element) {
                    return (new Date(element.startsAt).getDate() == indexJour) ? "activitie" : 'noactivitie';
                });
                break;
        }
    }
}


calendarController.$injector = [];

angular.module('calendarModule', []).component('calendarcomponent', {
    transclude: true,
    templateUrl: 'src/library/calendar/calendarView.html',
    controller: calendarController,
    controllerAs: 'ctrl',
    bindings: {
        monthevents: "="
    }
});