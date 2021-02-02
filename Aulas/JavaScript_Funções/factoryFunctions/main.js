function criaPessoa(nome, sobrenome)
{
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}`;
        },
        get nomeCompleto(){
            return (`${this.nome} ${this.sobrenome}`);
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log('Valor:',valor);
        }
    }

}

const p1 = criaPessoa('Pablo','Prota');
//p1.nome === this.nome dentro da funcao criaPessoa
p1.nomeCompleto = 'Pablo Antonini Prota';
console.log(p1.nomeCompleto);