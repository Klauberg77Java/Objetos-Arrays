//3) Crie um script que dado o seguinte array:
//a) calcule a soma de todos os valores do array:

const reader = require('readline-sync');

let values = [10,9,20,5,6,10,8,7,9,8,9,10,3,5,10]

function calcNoteSum(values){
    let total = 0;
    for (let index = 0; index < values.length; index++) {
          total =  total + values[index]
    }
    console.log(values)
}
calcNoteSum(values)

//b) calcule a média dos valores do array 
function calcNoteAverage(values) {
    let total = 0;
    for(let index = 0; index < values.length; index++) {
        total = total + values[index]
    }
    const media = total/values.length
    console.log(media)
}
calcNoteAverage(values)

//c) apresente os valores iguais ou maiores ao da média
function calcValueAverage(values) {
    let total = 0;
    for(let index = 0; index < values.length; index++) {
        total(values[index] > 7)
    }
    console.log(total);
}
calcValueAverage(values)


//d) crie um novo array com o resultado da multiplicação de cada elemento por 3
let values1 = [9,7,6]
function calcMultiplication(values1) {
    let newArray = []
    for(let index = 0; index < values1.length; index++) {
        newArray.push(values1[index] * 3)
    }
    console.log(newArray);
}
calcMultiplication(values1)



