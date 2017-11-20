'use strict';

/**
 * @ngdoc function
 * @name expressWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the expressWebApp
 */
app.controller('AboutCtrl', function (service,$scope) {
  var obj = {};
    service.pesquisar($scope,obj);
  });
