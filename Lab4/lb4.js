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
                let arr = App.Data.Valor.valor;
                let pares = 0;
                
                for(var x=0; x<arr.length;x+=1){
                    let num = arr[x];
                    let comp = false;
                    let pairs = 0;

                    if(x>0){
                        for(let y=0; y<x; y+=1){
                            if (arr[y]==num){
                                comp = true;
                                break;
                            }
                        }
                    }
                    if(comp == false){
                        for(let z=0; z<arr.length;z+=1){
                            if (num == arr[z]){
                                pairs += 1;
                            }
                        }
                        pares += Math.floor(pairs/2);
                    }
                    //pares += Math.floor(pairs/2);
                }
                
                console.log('Pares: '+pares);

            },
        },
    };
    App.Methods.init([3,1,2,1,2,3]);
    App.Methods.calArreglo();
})();