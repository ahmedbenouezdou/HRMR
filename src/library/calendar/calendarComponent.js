function calendarController() {
    var ctrl = this;

    function init() {
        console.log(ctrl.month);
        initMonth();
    }

    ctrl.previousMonth = function previousMonth() {

        ctrl.month = ctrl.month - 1;
        initMonth();

    };

    ctrl.nextMonth = function nextMonth() {

        ctrl.month = ctrl.month + 1;

        initMonth();

    };

    function initMonth() {
        var nbDayMonth = workingDayWorked(ctrl.month, false);
        ctrl.calendarMonth = [];
        ctrl.monthYears = moment(new Date(ctrl.years, ctrl.month, 1)).format("MM/YYYY");

        var Base = new Date(ctrl.years, ctrl.month, 1);

        var weekDay = [];
        for (var i = 0; i < nbDayMonth; i++) {

            var dateEvent = new Date(new Date(Base).setDate(Base.getDate() + i));
            if (dateEvent.getDay() === 1) {
                weekDay = [];
            }
            weekDay.push({date: dateEvent, nbjour: dateEvent.getDay(), day: i + 1});
            if (dateEvent.getDay() === 0) {
                var weekDayLength = angular.copy(weekDay.length);
                if (weekDay.length != 7) {
                    for (var iDateWeek = 0; iDateWeek < (7 - weekDayLength); iDateWeek++) {
                        weekDay.splice(iDateWeek, 0, {date: '', nbjour: '', day: ''});
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

    init();
}


calendarController.$injector = [];

angular.module('calendarModule', []).component('calendarcomponent', {
    templateUrl: 'src/library/calendar/calendarView.html',
    controller: calendarController,
    bindings: {
        events: "=",
        month:"=",
        years:'='
    }
});