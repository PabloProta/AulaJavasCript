//return
//retorna um valor
//encerra uma função


function criaMutiplicador(mutiplicador){
    return function(n){
       return n * mutiplicador;
    }
}

const duplica = criaMutiplicador(2);
const triplica = criaMutiplicador(3);
const quadriplica = criaMutiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(3));
