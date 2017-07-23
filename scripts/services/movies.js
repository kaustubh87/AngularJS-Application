'use strict';

/**
 * @ngdoc service
 * @name movieManiaAppApp.Movies
 * @description
 * # Movies
 * Factory in the movieManiaAppApp.
 */
angular.module('movieManiaApp')
  .factory('Movies', function ($http) {
    // Service logic
    // ...

      //Private Area

      var moviesRequest = null;


    // Public API here
    return {
      load: function () {
        if(!moviesRequest){
          moviesRequest  = $http.get('/movies.json');
        }
        return moviesRequest;
      },
      find: function(id, movies){
        for(var i in movies){
          var movie = movies[i];
          if(id === movie.id){
            return movie;
          }
        }
      }
    };
  });
