// * Para esse exercicio, precisamos pedir pro usuário digitar os 3 números.
// * Segundo, a máquina teria que ler essa informação e guardar essa informação.
// * Terceiro, depois que foi guardado os números, precisamos somar os números que o usuário digitou e guardar o resultado.
// * Por último, apresentar o resultado da soma.

const reader = require('readline-sync');

console.log("Digite o primeiro número");
let numero1 = parseFloat(reader.prompt());
console.log("Digite o segundo número");
let numero2 = parseFloat(reader.prompt());
console.log("Digite a terceira nota");
let numero3 = parseFloat(reader.prompt());
somarNumeros(numero1,numero2,numero3);

function somarNumeros(numero1,numero2,numero3) {
    const soma = (numero1 + numero2 + numero3);
    console.log("O resultado da soma é ",soma);
}


