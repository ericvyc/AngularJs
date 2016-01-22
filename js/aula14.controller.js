app.controller('aula14Controller',Aula14Controller);

function Aula14Controller($scope, $http){
    
    $scope.dados = [];
    $scope.cidades = [];
    
    $scope.url = "http://api.openweathermap.org/data/2.5/forecast/city?id=";
    $scope.appid = "&appid=9c4c08022fd8de381942578ab9e6ec23";
    $scope.cidade = "524901";
    
    $scope.carregaDados = function(){
      $http.get("dados.json").success(function(data){
            console.log(data);
            $scope.dados = data;
        })
        .error(function(){
        alert("Não foi possível carregar os dados!")
    });  
    };   
    
    $scope.carregaPrevisao = function(){
         $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=9c4c08022fd8de381942578ab9e6ec23').success(function(data){
            console.log(data);
            $scope.cidade = data;
        })
        .error(function(){
        alert("Não foi possível carregar os dados!")
    });
    };

};