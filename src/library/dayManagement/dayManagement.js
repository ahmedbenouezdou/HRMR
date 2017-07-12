function workingDayWorked(month, ouver) {
    var d = new Date();

    d.setUTCMonth(month);

    var nbDay = getNumberOfDaysMonth(d);
    var dayMonth = 0;
    if (ouver) {
        for (var i = 0; i < nbDay; i++) {
            var dateEvent = new Date(new Date().setDate(new Date().getDate() + i));

            if (dateEvent.getDay() != 0 && dateEvent.getDay() != 6) {
                dayMonth++;
            }

        }
        return dayMonth;
    } else {
        return nbDay;
    }

}


function getNumberOfDaysMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, -1).getDate() + 1;
}


function diffdate(d1, d2, u) {
    div = 1;
    switch (u) {
        case 's':
            div = 1000;
            break;
        case 'm':
            div = 1000 * 60;
            break;
        case 'h':
            div = 1000 * 60 * 60;
            break;
        case 'd':
            div = 1000 * 60 * 60 * 24;
            break;
    }

    var Diff = d2.getTime() - d1.getTime();
    return Math.ceil((Diff / div))
}

