(function () {

    "use strict";

    var myApp = angular.module('myApp', ['ngRoute']);
     
    myApp.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);
     
     myApp.config([
        '$interpolateProvider', function($interpolateProvider) {
            return $interpolateProvider.startSymbol('{(').endSymbol(')}');
        }
    ]);
     
    //config routing
    myApp.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
        .when('/', {
            templateUrl: 'templates/default.html',
            controller: 'defaultController'
        })
        .when('/blog', {
            templateUrl: 'templates/blog.html',
            controller: 'blogController'
        })
    });

    myApp.controller("homeController", ['$scope', '$location', function ($scope, $location) {

    }]);

    myApp.controller("defaultController", ['$scope', '$location', function ($scope, $location) {

    }]);

    myApp.controller("blogController", function ($scope, $http) {
        $scope.errorstatus = '';

        $http.get('blogdata.json')
           .then(function (response) {
               $scope.blogs = response.data;
           })


    });

})();
