app.controller('aula08Controller', function($scope){
    
    $scope.estados = ['MG','SP','RS','PR'];
    
    $scope.pessoa = criarPessoa();
    $scope.pessoas = [];
    
    $scope.resetarForm = function(){
        $scope.frm.$setUntouched();
        $scope.pessoa = {};
    }
    
    $scope.incluirPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        $scope.pessoa = criarPessoa();
        $scope.frm.$setUntouched();
        $scope.frm.$setPristine();
    };
    
});

function criarPessoa(){
    return {
        nome : "Eric Vilar",
        email : "eric.castanheira@cast.com.br",
        sexo : "m",
        estado : "MG"
    }
}