'use strict';

/**
 * @ngdoc function
 * @name expressWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expressWebApp
 */
app
  .controller('MainCtrl', function (service,$scope) {
      var obj = {};
        service.pesquisar($scope,obj);
  });
