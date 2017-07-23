angular.module('activitiesModule').service('activitiesService', function (calendarConfig) {

    this.disabledDates = []

    this.getLeave = function getLeave() {

        var leaveValid = {
            title: 'Event 1',
            color: calendarConfig.colorTypes.warning,
            startsAt: moment("03072017", "DD/MM/YYYY").startOf('day').toDate(),
            endsAt: moment("03072017", "DD/MM/YYYY").startOf('day').toDate(),
            etat:0
        };


        if ((diffdate(leaveValid.startsAt, leaveValid.endsAt, 'd') != 0)) {
            return leaveValid;
        } else {
            this.disabledDates.push(leaveValid.startsAt);
            return leaveValid;
        }


    }
});

