var app = angular.module('appRoute',['ngRoute']);
app.controller('aula11Controller', Aula11Controller);
app.controller('InicialController', InicialController);
app.controller('Pagina1Controller', Pagina1Controller);
app.controller('Pagina2Controller',Pagina2Controller)

app.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider){
   $routeProvider
    .when('/', {
        templateUrl : '/AngularJs/aula11_inicial.html',
        controller : 'InicialController'
    })
   .when('/Pagina1',{
       templateUrl : '/AngularJs/aula11_pagina1.html',
       controller : 'Pagina1Controller'
   })
   .when('/Pagina2/:id',{
       templateUrl : '/AngularJs/aula11_pagina2.html',
       controller : 'Pagina2Controller'
   })
    .otherwise({
        redirectTo : '/'
    });
    $locationProvider.html5Mode(true); 
}]);

function Pagina2Controller($scope, $routeParams){
  console.log('Pagina2Controller');  
  $scope.param = $routeParams;
  console.log('Id: '+$scope.param.id);
};

function Pagina1Controller($scope){
  console.log('Pagina1Controller');  
};

function InicialController($scope){
    console.log("Controller Inicial");
};

function Aula11Controller($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;  
    console.log("Controller Aula 11");
};