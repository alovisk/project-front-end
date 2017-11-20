var modulo = angular.module('progetto', ['ngRoute']);

    // configure our routes
    modulo.config(function ($routeProvider, $httpProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'listaFilm.html',
                controller: 'listaController'
            })

            // route for the description page
            .when('/:phoneName', {
                templateUrl: 'description.html',
                controller: 'descriptionController'
            });


            $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    });


    modulo.controller('listaController', function ($scope, $http) {
        $http.get('https://api.getevents.co/event?&lat=41.904196&lng=12.465974').success(function (data) {
            $scope.names = data;
            }).
            error(function (data, status) {
                $scope.names = "Request failed";
            });
    });