(function(){
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieDetails", {
        templateUrl: "ps-movies/movie-details.component.html",
        /* $canActivate: function($timeout) {
            // This lifecycle hook is called before Controller instantiation, so cant be included in cotroller
            // Can be used to check if user has access to this component
            return $timeout(function(){
                return true;
            }, 2000);
        }, */
        $routeConfig: [
            { path: "/overview", component: "movieOverview", name: "Overview" },
            { path: "/cast", component: "movieCast", name: "Cast" },
            { path: "/director", component: "movieDirector", name: "Director" }
        ],
        controllerAs: "model",
        controller: function(){
            var model = this;

            // Lifecycle hook
            model.$routerOnActivate = function(nextRoute, previousRoute) {
                model.id = nextRoute.params.id
            };
        }
    });
}());