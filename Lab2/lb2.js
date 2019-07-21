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
                App.Data.Valor.valor = n;              
            },
            calSuma : function(){

                let arr = App.Data.Valor.valor;
                let suma = 0;
                let i = 0;
                
                while (i <= arr.length - 1)
                {
                    suma = suma + arr[i];
                    i++;
                }
                console.log(suma)
            },
        },
    };
    App.Methods.init([1,2,3]);
    App.Methods.calSuma();
})();