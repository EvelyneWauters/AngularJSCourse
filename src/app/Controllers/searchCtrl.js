function SearchCtrl($scope) {
    $scope.message = "Hello world";
}



angular.module('movieApp.controllers')
    .controller('searchCtrl', SearchCtrl);