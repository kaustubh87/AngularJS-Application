'use strict';

/**
 * @ngdoc function
 * @name movieManiaAppApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the movieManiaAppApp
 */
angular.module('movieManiaApp')
  .controller('MoviesCtrl', function ($scope, $routeParams, $location,$http) {
    var id = parseInt($routeParams.id);

    $scope.movies = movieList;

    for (var index in movieList){
      var movie = movieList[index];
      if(movie.id === id){
        $scope.movie = movie;
        break;
      }
    }

    $scope.goToRandomMovie = function(){
        var id = parseInt($routeParams.id , 10);
        var index = Math.floor(Math.random() * $scope.movies.length);
        var movie = $scope.movies[index];
        var url = '#/movie/' +movie.id;
        $location.url(url);
    };
  });
