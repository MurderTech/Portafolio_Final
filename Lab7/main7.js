(function(){
    var Module = {
        Data : {
            Valor : function(val){
                this.valor = val;
            }
        },
        Controls: {
            form: document.querySelector('.js-form'),
            input: document.querySelector('.js-form-matriz'),
            boton: document.querySelector('.js-form-button'),
            resp: document.querySelector('.js-response'),
        },
        Exceptions : {
            UserException : function(message){
                this.message = message;
                this.name = 'UserException';
            }
        },
        Events: {
            onFormSubmit: function(ev){
                ev.preventDefault();
                
                const matriz = Module.Controls.input.value.split(',');
                let pares = 0;
                
                for(var x=0; x<matriz.length;x+=1){

                    if (isNaN(matriz[x])){
                        throw new Module.Exceptions.UserException('Se ha ingresado un valor no numerico');
                    }else{
                        let num = matriz[x];
                        let comp = false;
                        let pairs = 0;

                        if(x>0){
                            for(let y=0; y<x; y+=1){
                                if (matriz[y]==num){
                                    comp = true;
                                    break;
                                }
                            }
                        }
                        if(comp == false){
                            for(let z=0; z<matriz.length;z+=1){
                                if (num == matriz[z]){
                                    pairs += 1;
                                }
                            }
                            pares += Math.floor(pairs/2);
                        }
                    }
                    
                    //pares += Math.floor(pairs/2);
                }
                
                console.log('Pares: '+pares);
                Module.Controls.resp.innerHTML = '<hr>Hay '+pares+' pares'


            }
        },
        Methods: {
            init: function(){
                Module.Methods.eventBinding();
            },
            eventBinding: function(){
                Module.Controls.form.addEventListener('submit', Module.Events.onFormSubmit);
            }
        },
    };
    Module.Methods.init();
    
})();