'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp',['ngRoute'])
.controller('MainCtrl', function ($scope) {
    var movie = {
      title: 'The Revenant',
      image: '/images/revenant.jpg',
      description: 'This movie is based on a lone survivor'
    };

    $scope.movieTitle = movie.title;
    $scope.movieDescription = movie.description;
  });
