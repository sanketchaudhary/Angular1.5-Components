(function(){
    var module = angular.module("psMovies", ["ngComponentRouter"]);

    // Register Routes
    /* module.config(function($routeProvider, $locationProvider) {
         $locationProvider.hashPrefix('');
        $routeProvider
            .when("/list", { template: "<movie-list></movie-list>" })
            .when("/about", {template: "<app-about></app-about>"})
            .otherwise({ redirectTo: "/list"})
    }); */

    // Set Top level Component
    module.value("$routerRootComponent", "movieApp");

    // About Component
    module.component("appAbout", {
        template: "This is About page.."
    });

}());