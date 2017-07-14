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
    /*var movie = {
      title: 'The Revenant',
      image: '/images/revenant.jpg',
      description: 'This movie is based on a lone survivor'
    };
    */

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
  }).controller('FormCtrl',function($scope){
      console.log('We have a form controller');
  });
