function SearchCtrl($scope, $http, apiUrl) {
    $scope.message = "Type in any title, ANY title";


    $scope.searchMovie = function(title)    {
        console.log(title);
    }
}



angular.module('movieApp.controllers')
    .controller('searchCtrl', SearchCtrl);