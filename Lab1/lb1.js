(function(){
    var App = {
        Data : {
            Valor : function(val){
                this.valor = val;
            }
        },
        Exceptions : {
            UserException : function(message){
                this.message = message;
                this.name = 'UserException';
            }
        },
        Methods : {
            init : function(n){
                if ((n < 1) || (n > 100)){
                    throw new App.Exceptions.UserException('El numero '+n+' no cumple la condicion de "1 <= n <= 100"');
                }else{          
                    App.Data.Valor.valor = n;
                }                
            },
            calcFibbo : function(){

                console.log('Inicio Fibonacci\n');

                var var1 = 0;
                var var2 = 1;
                var var3;
                
                console.log(var1+"");
                console.log(var2+"");
                for(var i=3; i <= App.Data.Valor.valor+1;i++)
                {
                    var3 = var1 + var2;
                    var1 = var2;
                    var2 = var3;
                    console.log(var3+"");
                }
                console.log('\nFin Fibonacci\n')
            },
            calcFact : function(){
                
                var total = 1; 
                for (i=1; i<= App.Data.Valor.valor; i++) {
                    total = total * i; 
                }
                console.log('\nEl Factorial de '+App.Data.Valor.valor+' es: '+total); 
            }
        },
    };
    App.Methods.init(1);
    App.Methods.calcFibbo();
    App.Methods.calcFact();
})();