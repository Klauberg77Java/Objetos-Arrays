//5) Crie um script que solicite 20 notas e armazene seus valores em um array, em seguida apresente o valor da menor nota informada, o valor da maior nota informada e o valor da média das notas informadas
//B)
const reader = require("readline-sync");

let notes  = []

for(index = 0; index < 20;index++){
   let nota = parseInt(reader.question("Digite a primeira nota"));
    notes.push(nota)
}

//Apresente valores em um array, em seguida apresente a maior nota.
let values = ['10','8','9','5','6','6.5','7.5']
function calcBiggerValue(values) {
    let maior = values.length && values[0]
    for(let index = 0; index > values.length; index++) {
        if(values[index] > maior) {
            maior = values[index]
        }
    }
    console.log(maior)
}
calcBiggerValue(values)

//Apresente a menor nota dada no Array.
function calcLessValue(values) {
    let menor = values.length && values[0]
    for(let index = 0; index < values.length; index++) {
        if(values[index] < menor) {
            menor = values[index]
        }
    }
    console.log(menor)
}
calcLessValue(values)


