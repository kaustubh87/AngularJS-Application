'use strict';

/**
 * @ngdoc function
 * @name movieManiaAppApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the movieManiaAppApp
 */
angular.module('movieManiaApp')
  .controller('MoviesCtrl', function ($scope, $routeParams, $location, Movies) {

   Movies.load().then(function(result){

     $scope.movies = result.data;
   }, function(error){
     console.log('Error ' +error);
   });

    $scope.goToRandomMovie = function(){
        var id = parseInt($routeParams.id , 10);
        var index = Math.floor(Math.random() * $scope.movies.length);
        var movie = $scope.movies[index];
        var url = '#/movie/' +movie.id;
        $location.url(url);
    };
  });
