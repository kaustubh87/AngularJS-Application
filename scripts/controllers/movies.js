'use strict';

/**
 * @ngdoc function
 * @name movieManiaAppApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the movieManiaAppApp
 */
angular.module('movieManiaApp')
  .controller('MoviesCtrl', function ($scope, $routeParams, $location, $http) {
    var url = "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc";

   $http.get(url).then(function(result){

     $scope.repo = result;
   }, function(result){
     console.log('The request failed ' +result);
   });




    $scope.goToRandomMovie = function(){
        var id = parseInt($routeParams.id , 10);
        var index = Math.floor(Math.random() * $scope.movies.length);
        var movie = $scope.movies[index];
        var url = '#/movie/' +movie.id;
        $location.url(url);
    };
  });
