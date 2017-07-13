function activitiesController(moment, calendarConfig,activitiesService) {
    var ctrl = this;

    ctrl.newActiv = {};
    moment.locale('fr'); // change the locale to french

    calendarConfig.dateFormatter = 'moment'; // use moment instead of angular for formatting dates
    var originali18n = angular.copy(calendarConfig.i18nStrings);
    calendarConfig.i18nStrings.weekNumber = 'Semaine {week}';

    ctrl.$onInit = function() {
        ctrl.month = new Date().getUTCMonth();
        ctrl.years = new Date().getUTCFullYear();
        ctrl.monthYears = moment(new Date(ctrl.years, ctrl.month, 1)).format("MM/YYYY");


        ctrl.disabledDates=[];
        ctrl.events = [
            {
                title: 'Event 1',
                color: calendarConfig.colorTypes.info,
                startsAt: moment("01062017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("01062017", "DD/MM/YYYY").startOf('day').toDate()
            },
            {
                title: 'Event 2',
                color: calendarConfig.colorTypes.info,
                startsAt: moment("05062017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("05062017", "DD/MM/YYYY").startOf('day').toDate()
            }
        ];
        // ctrl.newActiv.startsAt= moment("01062017", "DD/MM/YYYY")
        ctrl.events.push(activitiesService.getLeave());

        ctrl.calendarView = 'month';
        ctrl.viewDate = moment().startOf('month').toDate();
        ctrl.disabledDates=activitiesService.disabledDates;
        ctrl.monthevents={
            month: ctrl.month,
            years:ctrl.years,
            events:ctrl.events
        }
    };


    ctrl.addActivities = function addActivities() {
        var diffDateEvent = (diffdate(new Date(ctrl.newActiv.startsAt), new Date(ctrl.newActiv.endsAt), 'd') + 1);
        for (var i = 0; i < diffDateEvent; i++) {
            var dateEvent = new Date(new Date().setDate(new Date(ctrl.newActiv.startsAt).getDate() + i));
            var activity = {};
            if (dateEvent.getDay() != 0 && dateEvent.getDay() != 6) {
                activity.color = calendarConfig.colorTypes.info;
                activity.startsAt = moment(new Date(dateEvent).toISOString()).format(" YYYY/MM/DD");
                activity.endsAt = moment(new Date(dateEvent).toISOString()).format(" YYYY/MM/DD");
                ctrl.disabledDates.push(moment(new Date(dateEvent).toISOString()).format(" YYYY/MM/DD"));
                console.log(activity);
                ctrl.events.push(activity);
            }
        }
        ctrl.newActiv = {};


    };


    ctrl.removeActivities = function removeActivities(index) {
        ctrl.events.splice(index,1);
    };

    ctrl.editActivities = function editActivities() {


    };

    ctrl.initDate = function initDate() {
        ctrl.newActiv.endsAt = "";
    };


    ctrl.editNextMonth =function editNextMonth(){
        return (workingDayWorked() === ctrl.events.length);
    };


    ctrl.previousMonth = function previousMonth() {

        ctrl.month = ctrl.month - 1;
        ctrl.monthYears = moment(new Date(ctrl.years, ctrl.month, 1)).format("MM/YYYY");
        //ctrl.initMonth();

    };

    ctrl.nextMonth = function nextMonth() {

        ctrl.month = ctrl.month + 1;
        ctrl.monthYears = moment(new Date(ctrl.years, ctrl.month, 1)).format("MM/YYYY");
        //ctrl.initMonth();

    };

}

activitiesController.$injector = ['moment', 'calendarConfig'];

angular.module('activitiesModule').component('activitiescomponent', {
    templateUrl: 'src/module/activities/activities.html',
    controller: activitiesController
});

