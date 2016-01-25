app.controller('aula18Controller', function($scope, $location){
    
    $scope.$location = $location;
    
    $scope.setaId = function(p_id){
        $location.search({id : p_id});
    }
    
    $scope.$watch('$location.search().id', function(id){
        console.log('Change: ' + id);
    });
    
});

app.config(['$locationProvider',function($locationProvider){
    
    $locationProvider.html5Mode({
       enabled : true,
       requireBase : false
    }).hashPrefix('#');
    
}]);