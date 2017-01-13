var App = {
    init: function() {
        try {
            App.handlers.init();            
        }catch (err) {
            console.error('[Silvano Amaral] ' + err.message);
        }
    },
    events: {
        insertAfter: function(el, referenceNode){
           referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling); 
        },
        insertChild: function(el,div){
            el.appendChild(div);
        }, 
        clique: function(element){
            var e = element[0];
            e.addEventListener('click', function(){
                console.info('[Silvano Amaral] clique no botão comprar.');
            }, false);
        }
    },
    handlers: {
        init: function(){
            try{
                App.handlers.place();
            }catch(e){
                console.error('[Silvano Amaral] '+ e.message);
            }
        },
        place: function() {
            var el = document.getElementsByClassName('classe')[0];
            el.setAttribute('id','teste-box');//adiciona atributo na class

            /* criando uma DIV */
            var div = document.createElement('div');
            div.classList.add('test-tit');//Adicionando class
            div.innerHTML = '<h1>Novo elemento HTML</h1>';

            var ref = document.getElementById('elemento referência');

            /* 
                - Executa o métodos insetAfter para adicionar a nova DIV.
                - Passando dois parâmetro 
                - 1º novo elemento
                - 2º Nome da class ou ID 
            */
            App.handlers.events.insertAfter(div, ref);
        },
        insertButton : function(){
            var el = document.getElementsByTagName('body')[0]

            var div = document.createElement('div');
            div.classList.add('test-btn');
            div.innerHTML = "<a href='javascript:void(0);' id='btn-comprar' type='button'>Comprar</a>";

            App.handlers.events.insertAfter(el, div);            

            var ref = document.getElementById('btn-comprar');
          
            App.events.comprarFake(ref);
        }
    }
}