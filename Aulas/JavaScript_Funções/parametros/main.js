

// function funcao(){
//     console.log(arguments);
// }

// funcao('ola','pessoal','passando','por','argumentos');


//Utilizando restOperator para armazenar todo o resto na variavel numeros.

function conta(operador, acumulador, ...numeros)
{
    for(let num of numeros)
    {
        if(operador === '+') acumulador +=num;
        if(operador === '-') acumulador -=num;
        if(operador === '*') acumulador *=num;
        if(operador === '/') acumulador /=num;
    }
    console.log(acumulador);
}
conta('/',1000,10,20,30,40);