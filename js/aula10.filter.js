/** angular.module('app').filter('up',Aula10Filter);

function Aula10Filter(){
    return function(nome){
      return nome.toUpperCase;  
    };
};*/

app.filter('up', function(){
    return function(nome){
        return nome.toUpperCase();
    }
});