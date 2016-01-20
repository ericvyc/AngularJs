app.controller('aula06Controller',function($scope){
    
    $scope.nome = "Curso AngularJs - DevMedia";
    
    $scope.nomeDev = "Eric";
    
    $scope.olaMundo = function(nome){
        alert("Olá " + nome + " !" );
    }
    
});