function calendarController() {
    var ctrl = this;
    var nbDayMonth = workingDayWorked(6, false);
    ctrl.calendarMonth = [];

    var Base = new Date(2017, 6, 1);

    var weekDay = [];
    for (var i = 0; i < nbDayMonth; i++) {

        var dateEvent = new Date(new Date().setDate(Base.getDate() + i));
        if (dateEvent.getDay() === 1) {
            weekDay = [];
        }
        weekDay.push({date: dateEvent, nbjour: dateEvent.getDay(), day: i + 1});
        if (dateEvent.getDay() === 0) {
                ctrl.calendarMonth.push(weekDay);
        }else if((i+1)=== nbDayMonth && dateEvent.getDay() !== 0){
            ctrl.calendarMonth.push(weekDay);
        }
    }

    ctrl.calendarMonth.forEach(function (element) {
        console.log(element);

        if (element.length != 7) {
            console.log(element.length);

            for(var i=0;i<element.length;i++){
                //element.push({date: '', nbjour: '', day: ''})
            }
        }
    });
}


calendarController.$injector = [];

angular.module('calendarModule', []).component('calendarcomponent', {
    templateUrl: 'src/library/calendar/calendarView.html',
    controller: calendarController
});