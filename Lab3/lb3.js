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
            calArreglo : function(){

                let SIZE = App.Data.Valor.valor;
                let mat = [];
                let acum = 0;
                let row = '';

                for (var i = 0; i < SIZE ; i++){
                    mat.push([]);
                    row = '';
                    for (var j = 0; j < SIZE ; j++){
                      var rand = Math.floor(Math.random()*10+0);
                      if (i === j){acum += rand}
                      mat[i].push(rand);
                      row += '   '+rand;
                    }
                    console.log(row);
                }

                console.log('Total diag: '+acum);
            },
        },
    };
    App.Methods.init(3);
    App.Methods.calArreglo();
})();