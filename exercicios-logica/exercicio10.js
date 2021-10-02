// * Primeiro, preciso criar um Array de notas, ['10,6,7,3,8,10,8,2,5,6,9'] .
// * Após isso, preciso calcular a média das notas .
// * Em seguida, preciso fazer uma comparação das notas com a média, se a nota for maior que a média, então vou guardar a nota dentro do Array .



function exercicio(){
    //criar um array com as notas
    let notes = [10,6,7,3,8,10,8,2,5,6,9]
    //criar um array para guardar as notas acima da média
    let notesGreaterThanAvg = []
    //calcular a média
    let average = calcAverage(notes);
    //verificar as notas que estão acima da média
    for(let index = 0; index < notes.length;index++){
        let currentNote = notes[index]
        if(currentNote > average){
            //adicionar as notas acima da média no array de notas acima da média
            notesGreaterThanAvg.push(currentNote);
        }
    }
    //apresentar as notas acima da média
    console.log(notesGreaterThanAvg.join("; "));

}

function calcAverage(notes){
    let sum = 0;
    for(let index = 0; index <notes.length; index++ ){
        sum += notes[index];
    }
    const average = sum /notes.length;
    return average;
}



function noteIsGreaterThan(note1,note2){
    const greaterThan =  note1 > note2;
    return greaterThan;
}

exercicio();
// function valorAcimaMedia() {
//     //Fazer a média
//     const media = (10 + 6 + 7 + 3 + 8 + 10 + 8 + 2 + 5 + 6 + 9) / 11

//     //Fazer a comparação.
//     let maior = notes.length && notes[0];
//     for(let posicao = 0; posicao < notes.length;posicao++) {
//         if (notes[posicao] > media) {
//             maior = [posicao]
//         }
//     }
//     console.log(media)
// }
// valorAcimaMedia();