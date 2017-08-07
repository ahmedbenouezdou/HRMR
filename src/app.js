var appPersonnel= angular.module('appPersonnel',['ui.router','activitiesModule','homeModule','profilModule','myProfilModule','720kb.datepicker', 'ngAnimate']);

appPersonnel.config(function($stateProvider) {


    var validDemande = {
        name: 'validDemande',
        url: '/validDemande',
        templateUrl: 'src/module/validLeave/demandeLeave.html'
    };


    var validCRA = {
        name: 'validCRA',
        url: '/validCRA',
        templateUrl: 'src/module/CRA/validCRA.html'
    };
    var home = {
        name: 'home',
        url: '/home',
        component: 'homeComponent'
    };
    var profil = {
        name: 'profil',
        url: '/profil',
        component: 'profilComponent'
    };

    var myProfil = {
        name: 'myProfil',
        url: '/myProfil',
        component: 'myProfilComponent'
    };

    var myInformation = {
        name: 'myProfil.myInformation',
        url: '/myInformation',
        templateUrl: 'src/module/myProfil/myInformation.html'
    };

    var gestionPersonnel = {
        name: 'gestionPersonnel',
        url: '/gestionPersonnel',
        component: 'gestionPersonnelComponent'
    };

    var leaveRequest = {
        name: 'leaveRequest',
        url: '/leaveRequest',
        component: 'leaveRequestComponent'
    };

    $stateProvider.state(home).state(leaveRequest)
        .state('activities',{
            name: 'activities',
            url: '/activities',
            component: 'activitiescomponent'
    }).state(validDemande).state(validCRA).state(gestionPersonnel).state(profil).state(myProfil);
});

appPersonnel.run(function(){
    moment.lang('fr', {
        months : "janvier_f�vrier_mars_avril_mai_juin_juillet_ao�t_septembre_octobre_novembre_d�cembre".split("_"),
        monthsShort : "janv._f�vr._mars_avr._mai_juin_juil._ao�t_sept._oct._nov._d�c.".split("_"),
        weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD/MM/YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd D MMMM YYYY LT"
        },
        calendar : {
            sameDay: "[Aujourd'hui �] LT",
            nextDay: '[Demain �] LT',
            nextWeek: 'dddd [�] LT',
            lastDay: '[Hier �] LT',
            lastWeek: 'dddd [dernier �] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : "dans %s",
            past : "il y a %s",
            s : "quelques secondes",
            m : "une minute",
            mm : "%d minutes",
            h : "une heure",
            hh : "%d heures",
            d : "un jour",
            dd : "%d jours",
            M : "un mois",
            MM : "%d mois",
            y : "une ann�e",
            yy : "%d ann�es"
        },
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : '�me');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
});

angular.module('activitiesModule',['mwl.calendar', 'ngAnimate','calendarModule']);
angular.module('homeModule',['barchartModule']);
angular.module('gestionPersonnelModule',[]);
angular.module('profilModule',[]);
angular.module('myProfilModule',[]);