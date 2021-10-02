const reader = require('readline-sync');

let note1 = parseInt(reader.question("Digite a primeira nota"));
let note2 = parseInt(reader.question("Digite a segunda nota"));
let note3 = parseInt(reader.question("Digite a terceira nota"));
let note4 = parseInt(reader.question("Digite a quarta nota"));
let note5 = parseInt(reader.question("Digite a quinta nota"));

function calcularMedia(note1,note2,note3,note4,note5) {
    let message = ""
    let average = (note1 + note2 + note3 + note4 + note5) /5
    if(average => 7) {
        message = "Aprovado"
    } else {
        message = "Reprovado"
    }
    console.log(message)
}
calcularMedia(note1,note2,note3,note4,note5)

