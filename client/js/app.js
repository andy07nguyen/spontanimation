// Create a module
//  inject the ngRoute dependency in the module.
var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/landing.html',
        })
        .when('/partial2',{
            templateUrl: 'partials/main.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
