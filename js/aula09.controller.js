app.controller('aula09Controller', function($scope, operacoes, Pessoa){
    
    $scope.op = operacoes;
    $scope.pessoa = new Pessoa();
    
});

app.controller('aula09Controller2', ['$scope','operacoes','Pessoa',function($scope, operacoes, Pessoa){

    $scope.op = operacoes;
    $scope.pessoa = new Pessoa();
    
}]);