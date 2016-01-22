/** angular.module('app').controller('Aula10Controller', Aula10Controller); */
app.controller('aula10Controller', Aula10Controller);
/** upFilter - parâmetro para injeção de filtro ou $filter (mais utilizado) */
function Aula10Controller($scope,$filter){
    
    $scope.pessoa = {
        nome : "Eric Vilar",
        idade : 20
    };
    
    $scope.teste = $filter('up')($scope.pessoa.nome);
    
};