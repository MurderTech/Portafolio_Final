(function(){
    var Module = {
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
                let acum = 0;
                for (i=0;i<=matriz.length-1;i++){
                    if (isNaN(matriz[i])){
                        throw new Module.Exceptions.UserException('Se ha ingresado un valor no numerico');
                    }else{
                        acum+=parseInt(matriz[i]);
                    }
                }
                Module.Controls.resp.innerHTML = 'Resultado: '+ acum;

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
    }
    Module.Methods.init();
})();