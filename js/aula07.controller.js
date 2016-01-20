app.controller('aula07Controller', function($scope){
    
    $scope.nomes = ['Eric','Vilar','Yankous','Castanheira'];
    
    $scope.pessoas = []; /** {nome : "Eric", idade : 20} */
    
    $scope.incluirPessoa = function(nomeP,idadeP){
        $scope.pessoas.push({
            nome : nomeP,
            idade : idadeP
        });
    }
    
});