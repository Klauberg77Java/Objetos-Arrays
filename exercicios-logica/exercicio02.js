// *  Nesse exercicio, precisamos calcular a média de tres notas.
// * Primeiro, precisamos pedir pro usuário digitar as tres notas.
// * Segundo, assim a máquina precisar ler a informação e guardar essa infromação.
// * Depois disso, precisamos pegar essa notas, somar e no final dividir pela quantidade de notas que é 3.
// * Por último, precisamos trazer o resultado.

const reader = require('readline-sync');

console.log("Digite a primeira nota!!!");
let nota1 = parseInt(reader.prompt());
console.log("Digite a segunda nota!!!");
let nota2 = parseInt(reader.prompt());
console.log("Digite a terceira nota!!!");
let nota3 = parseInt(reader.prompt());
fazerMedia(nota1,nota2,nota3)

function fazerMedia(nota1,nota2,nota3) {
    const media = (nota1 + nota2 + nota3) /3;
    console.log("O resultado da média é ",media)
}




