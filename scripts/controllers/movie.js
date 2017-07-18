'use strict';

/**
 * @ngdoc function
 * @name movieManiaAppApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieManiaAppApp
 */
angular.module('movieManiaApp')
  .controller('MovieCtrl', function ($scope, $routeParams) {
    console.debug($routeParams.id);

    var id = parseInt($routeParams.id , 10);
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

        for(var index in movieList){
          var movie = movieList[index];
          if(movie.id === id){
            $scope.movie = movie;
            break;
          }
        }
  });
