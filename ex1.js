const reader = require('readline-sync');

let notes = []

for( index = 0;index < 10 ;index++) {
    let note = parseInt(reader.question("Digite a primeira nota"));
    notes.push(note)
}

function calcBiggerNote() {
    let maior = notes.length && notes[0];
    for(let posicao = 0;posicao < notes.length;posicao++) {
        if (notes[posicao] > maior) {
            maior = notes[posicao]
        }if (notes > maior) {
            console.log("Número encontrado com Sucesso !!!")
        }else{
            console.log("Falha ao tentar buscar o número");
        }
    }
    console.log(maior)
}
calcBiggerNote();

