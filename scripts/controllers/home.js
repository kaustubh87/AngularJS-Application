'use strict';

/**
 * @ngdoc function
 * @name movieManiaAppApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the movieManiaAppApp
 */
angular.module('movieManiaApp')
  .controller('HomeCtrl', function ($scope) {
    var movieList = [
      {
        'title' : 'Ace Drummond',
        'image': './images/ace.jpeg',
        'description': 'This is based on the comic strip character'

      },
      {
        'title' : 'And then there were none',
        'image': './images/none.jpeg',
        'description': 'Based on a novel and subsequemt stage play'

      },
      {
        'title': 'Captain Kidd',
        'image' : './images/kidd.png',
        'description': 'The unhistorical adventures of pirate Captain Kidd'
      }
    ];

    $scope.movies = movieList;
  });
