function SearchCtrl($scope, $http, apiUrl, $log) {
    $scope.message = "Type in any title, ANY title";

    $scope.searchMovie = function(title)    {
        $log.debug(title);

        var url = apiUrl + 'Movies/search?title=' + title;

        //gaat nu de url effectief versturen via de Get-methode
        $http.get(url).success(function(data) {

            $log.debug(data);

            $scope.results = data;
        });

        $log.debug('run');


    }
}



angular.module('movieApp.controllers')
    .controller('searchCtrl', SearchCtrl);