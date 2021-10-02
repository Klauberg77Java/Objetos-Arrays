//4) Crie um script que dado o seguinte array: 
//a) apresente o menor valor do array:

const reader = require('readline-sync'); 

let notes = [4,7,10,2,1,50,7,3,25]

function calcLessValue(notes) {
    let menor = notes.length &&  notes[0] 
    for(let index = 0; index < notes.length;index++) {
        if(notes[index] < menor){
            menor = notes[index]
        }
    }
    console.log(menor);
}
calcLessValue(notes)

 // b) apresente o maior valor do array
 function calcMoreValue(notes) {
     let maior = notes.length && notes[0]
     for(let index = 0; index < notes.length;index++) {
        if(notes[index] > maior) {
            maior = notes[index]
        }
     }
     console.log(maior);
 }
 calcMoreValue(notes)
