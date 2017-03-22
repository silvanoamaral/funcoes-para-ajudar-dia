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
        isMobile : function(){
            if (navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|webOS/i) ) {
                return true;
            }
            else{
                return false;
            }
        },
        insertClassMobile: function(){
            if(App.handlers.events.isMobile()){
                document.querySelector("body").classList.add("mobile");
            }else{
                document.querySelector("body").classList.remove("mobile");
            }
        },
        resize: function(f){
            var nameFunction = f;
            window.addEventListener("resize", nameFunction);
            /*
                Name da função corresponde ao callback
            */            
        },
        mascaraMoeda : function(valor){
            /*
                Máscara Moeda com Expressão Regular
            */
            var m = valor; //Exemplo 'R$ 3.942,49' ou 432,00;
            m=m.replace(/\D/g,""); //Remove tudo o que não é dígito
            m=m.replace(/(\d{2})$/,",$1"); //Coloca a virgula
            m=m.replace(/(\d+)(\d{3},\d{2})$/g,"$1.$2"); //Coloca o primeiro ponto

            return m;
        },
        clique: function(element){
            var e = element[0];
            e.addEventListener('click', function(){
                console.info('[Silvano Amaral] clique no botão comprar.');
            }, false);
        },
        getRandomArbitrary: function(min, max) {
            /* gerar um número randômico */
            return (Math.random() * (max - min) + min).toFidex();
        },
        validateMail: function(a) {
            var b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return b.test(a)
        },
        validateCPF: function(a) {
            a = a.replace(/[^\d]+/g, "");
            var b, c;
            if (b = 0,
            "00000000000" == a || "11111111111" == a || "22222222222" == a || "33333333333" == a || "44444444444" == a || "55555555555" == a || "66666666666" == a || "77777777777" == a || "88888888888" == a || "99999999999" == a)
                return !1;
            for (i = 1; i <= 9; i++)
                b += parseInt(a.substring(i - 1, i)) * (11 - i);
            if (c = 10 * b % 11,
            10 != c && 11 != c || (c = 0),
            c != parseInt(a.substring(9, 10)))
                return !1;
            for (b = 0,
            i = 1; i <= 10; i++)
                b += parseInt(a.substring(i - 1, i)) * (12 - i);
            return c = 10 * b % 11,
            10 != c && 11 != c || (c = 0),
            c == parseInt(a.substring(10, 11))
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