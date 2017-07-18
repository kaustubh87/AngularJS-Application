'use strict';

/**
 * @ngdoc function
 * @name movieManiaAppApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the movieManiaAppApp
 */
angular.module('movieManiaApp')
  .controller('MoviesCtrl', function ($scope, $routeParams, $location) {

     var movieList = [
      {
        id: 23,
        'title' : 'Ace Drummond',
        'image': './images/ace.jpeg',
        'description': 'This is based on the comic strip character'

      },
      {
        id: 5,
        'title' : 'And then there were none',
        'image': './images/none.jpeg',
        'description': 'Based on a novel and subsequemt stage play'

      },
      {
        id: 43,
        'title': 'Captain Kidd',
        'image' : './images/kidd.png',
        'description': 'The unhistorical adventures of pirate Captain Kidd'
      }];

    $scope.movies = movieList;

    $scope.goToRandomMovie = function(){
        var id = parseInt($routeParams.id , 10);
        var index = Math.floor(Math.random() * $scope.movies.length);
        var movie = $scope.movies[index];
        var url = '#/movie/' +movie.id;
        $location.url(url);
    };
  });
