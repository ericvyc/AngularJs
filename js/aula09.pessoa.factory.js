app.factory('Pessoa',function(){
    var Pessoa =function(){
        this.nome = "Eric";
        this.idade = 20;
        
        this.saudacao = function(){
          return "Olá: " + this.nome + " !" ;  
        };
    };
    
    return Pessoa;
});