app.controller('aula16Controller',Aula16Controller);

$(function(){
    $(".tooltip").tooltipsy({
        offset : [0, 10],
    });
});

app.directive('tooltip', function(){
    return {
        restrict : 'A',
        link : function(scope, element, attr){
            
            console.log(element.html());
            
            //console.log(element.hide('slow'));
            
            element.tooltipsy({
        offset : [0, 10],
        content : scope.textoTooltip
    });
            
        }
    }
    
});

function Aula16Controller($scope){
    $scope.textoTooltip = "Esse é o texto do tooltip";
};