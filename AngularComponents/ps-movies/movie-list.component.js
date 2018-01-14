(function () {
    "use strict";

    // Get module
    var module = angular.module("psMovies");

    // Function to fetch movies
    function fetchMovies($http)
    {
        return JSON.stringify([
    {
        "id": 1,
        "title": "Star Wars",
        "rating": 5,
        "length": 120
    },
    {
        "id": 2,
        "title": "Star Trek",
        "rating": 4,
        "length": 90
    },
    {
        "id": 3,
        "title": "Terminator",
        "rating": 4,
        "length": 125
    },
    {
        "id": 4,
        "title": "The Hobbit",
        "rating": 5,
        "length": 480
    }
]);
        /* return $http.get("/../movies.json")
                    .then(function(response){
                        return response.data;
                    }); */
    }

    var controller = function ($http) {
        var model = this;
        model.movies = [];

        // OnInit
        model.$onInit = function(){
            /* fetchMovies($http).then(function(movies){
                model.movies = movies; 
            }); */

            // Get Movies
            model.movies = JSON.parse(fetchMovies($http));
        };

        // upRating function
        model.upRating = function(movie) {
            if(movie.rating < 5)
                movie.rating += 1; 
        };

        // downRating function
        model.downRating = function(movie) {
            if(movie.rating > 1)
                movie.rating -= 1; 
        };

        // GoTo function
        model.goTo = function(id) {
            model.$router.navigate(["Details", {id:id}, "Overview"]);
        };
    }

    // Create Movielist Component
    module.component("movieList", {
        templateUrl: "ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller],
        bindings: {
            "$router": "<"
        }
    });
}());