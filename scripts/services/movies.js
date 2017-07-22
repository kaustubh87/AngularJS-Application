'use strict';

/**
 * @ngdoc service
 * @name movieManiaAppApp.Movies
 * @description
 * # Movies
 * Factory in the movieManiaAppApp.
 */
angular.module('movieManiaAppApp')
  .factory('Movies', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
