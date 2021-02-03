function criaCalculador(){
    return{

         display : document.querySelector('.display'),
         btnClear : document.querySelector('.btn-clear'),







      inicia: function(){
          this.cliqueBotoes();
          this.pressionaEnter();
          this.display.focus();
      },
      pressionaEnter(){
        this.display.addEventListener('keyup',e =>{
            if(e.keyCode === 13)
            {
                this.resultado();
            }
        })
      },
      apagar(){
          this.display.value  = this.display.value.slice(0,-1);
      },
      resultado(){
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if(!conta)
            return alert('Conta invalida');

            this.display.value = String(conta);
        } catch (err) {
            alert('Conta inválida');
            return;
        }
      },
      clearDisplay(){
          this.display.value ='';
      },
      cliqueBotoes: function(){
        document.addEventListener('click',(e) =>{
            const el = e.target;
            this.display.focus();

            if(el.classList.contains('btn-num')){

                this.btnParaDisplay(el.innerText);

            }
            if(el.classList.contains('btn-clear'))
            {
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del'))
            {
                this.apagar();
            }
            if(el.classList.contains('btn-eq')){
                this.resultado();
            }
        });
      },

      btnParaDisplay(valor){
            this.display.value += valor;
        },





    };
}

const calculadora = criaCalculador();
calculadora.inicia();
