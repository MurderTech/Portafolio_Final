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
                let SIZE = Module.Controls.input.value;
                let mat = [];
                let acum = 0;
                let row = '';
                let vTemp = '';

                if (isNaN(SIZE)){
                    throw new Module.Exceptions.UserException('Se ha ingresado un valor no numerico');
                }else{
                    for (var i = 0; i < SIZE ; i++){
                        mat.push([]);
                        row = '';
                        for (var j = 0; j < SIZE ; j++){
                          var rand = Math.floor(Math.random()*10+0);
                          if (i === j){acum += rand}
                          mat[i].push(rand);
                          row += ' '+rand+' ';
                        }
                        console.log(row);
                        vTemp = Module.Controls.resp.innerHTML;
                        Module.Controls.resp.innerHTML = '';
                        Module.Controls.resp.innerHTML += vTemp+'<br>'+(row); 
                    }
                    Module.Controls.resp.innerHTML = Module.Controls.resp.innerHTML+'<hr>Resultado: '+ acum;
                }
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