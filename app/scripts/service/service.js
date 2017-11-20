'use strict';

app.service('service', ["$http","$q", function ($http,$q) {

    return {
        
        pesquisar : function ($scope,obj){
                var url =  "http://localhost:3000/img";
                $http.get(url)
                .then(
                  /* sucesso */
                  function(response) {
                    $scope.teste = response.data;
                  },
                  /* falha */
                  function(error) {
                });
           
        },
    }


}]);