


function SearchCtrl($scope, $http, apiUrl, $log, $location) {
    $scope.message = "Type in any title, ANY title";

    $scope.searchMovie = function(title)    {
        $log.debug(title);

        var url = apiUrl + 'Movies/search?title=' + title;

        //gaat nu de url effectief versturen via de Get-methode
        $http.get(url).success(function(data) {

            $log.debug(data);
            $scope.results = data;
        });

        $scope.selectMovie = function(id){
          $scope.selectedId = id;
        };
        $log.debug('run');


        $scope.addMovie = function(id)  {
            var url = apiUrl + 'Movies/' + id;
            $http.post(url).success(function()    {
                $location.url('/collection');
            });
        };
    }
}



angular.module('movieApp.controllers')
    .controller('searchCtrl', SearchCtrl);