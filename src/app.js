var appPersonnel= angular.module('appPersonnel',['ui.router','activitiesModule','homeModule','720kb.datepicker', 'ngAnimate']);

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

    var gestionPersonnel = {
        name: 'gestionPersonnel',
        url: '/gestionPersonnel',
        component: 'gestionPersonnelComponent'
    };

    $stateProvider.state(home)
        .state('activities',{
            name: 'activities',
            url: '/activities',
            component: 'activitiescomponent'
    }).state(validDemande).state(validCRA).state(gestionPersonnel);
});


angular.module('activitiesModule',['mwl.calendar', 'ngAnimate','calendarModule']);
angular.module('homeModule',[]);
angular.module('gestionPersonnelModule',[]);