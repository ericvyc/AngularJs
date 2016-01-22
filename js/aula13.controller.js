app.controller('aula13Controller', Aula13Controller);

function Aula13Controller($scope){
    
};

app.directive('ngOla',OlaDirective);

function OlaDirective(){
  return {
      restrict : 'AEC',
      
      scope : {
          ngNome : '@'
      },
      
      template : '<h1>Olá, {{ngNome}}</h1>',
      
      controller : ['$scope', function($scope){
          
          $scope.saudacao = function(nome){
              alert('Ola '+nome+' !');
          }
          
      }],
      
      link : function(scope, iElement, iAttrs){
          
          console.log(iElement);
          console.log(iAttrs);
          scope.saudacao(iAttrs.ngNome);
      }      
  }  
};