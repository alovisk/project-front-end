'use strict';

/**
 * @ngdoc overview
 * @name expressWebApp
 * @description
 * # expressWebApp
 *
 * Main module of the application.
 */
var app = angular
  .module('expressWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  app.config([
    '$httpProvider','$routeProvider',
    function($httpProvider,$routeProvider) {
  
      var interceptor = [
        '$q',
        '$rootScope',
        function($q, $rootScope) {
  
          var service = {
  
            // run this function before making requests
            'request': function(config) {
  
              if (config.method === 'GET') {
                // the request looks good, so return the config
                return config;
              }
  
              // bad request, so reject
              return $q.reject(config);
  
            }
  
          };
  
          return service;
  
        }
      ]
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  
      $httpProvider.interceptors.push(interceptor);
  
    }
  ])