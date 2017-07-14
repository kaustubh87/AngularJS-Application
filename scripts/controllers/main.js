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

    $scope.closed = false;

    $scope.movies = movieList;

    $scope.movie = {
      title: '',
      image: './images/argo.jpeg'
    };

    $scope.validateTitle = function(){

        if($scope.movie.title.length>0){
          console.debug($scope.newMovieTitle);
        }
        else
        {
          window.alert('Title cannot be left blank');
        }

    };

    $scope.addMovie = function(){
        $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = function(){
        if($scope.movie.category  === ''){
          window.alert('Category cannot be empty');
        }
    };

    $scope.checkDescription = function(){
      console.debug($scope.movie.description);
    }

    $scope.isValid = function(){
      if($scope.movie.title === '') {
        return false;
      }
      if($scope.movie.description === ''){
        return false;
      }
      if($scope.movie.category === ''){
        return false;
      }
      return true;
    }

  });
