const reader = require('readline-sync');

let notas = []

for(index = 0;index < 10; index++) {
    let nota = parseInt(reader.question("Digite a primeira nota"))
    notas.push(nota)
}

//Apresente valores em um array, em seguida apresente a maior nota.
function calcBiggerValue(notas) {
    let maior = notas.length && notas[0];
    for(let index = 0; index > notas.length;index++) {
        if(notas[index] > maior) {
            maior = notas[index]
        }
    }
    console.log(maior)
}
calcBiggerValue(notas)



//Apresente a menor nota.
function calcLessValue(notas) {
    let menor = notas.length && notas[0];
    for(let index = 0; index < notas.length;index++) {
        if(notas[index] < menor) {
            menor = notas[index]
        }
    }
    console.log(menor)
}
calcLessValue(notas)

