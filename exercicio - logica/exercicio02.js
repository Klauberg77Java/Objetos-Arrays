const reader = require('readline-sync');

let nota1 = parseInt(reader.question("Digite a primeira nota"));
let nota2 = parseInt(reader.question("Digite a segunda nota"));
let nota3 = parseInt(reader.question("Digite a terceira nota"));



function calcMedia(nota1,nota2,nota3) {
    const average = (nota1 + nota2 + nota3) / 3
    if (average >= 9) {
        console.log("Sua média é A+")
    } else if(average >= 8) {
        console.log("Sua nota é B+")
    } else if(average >= 7) {
        console.log("Sua média é B-")
    } else if(average >= 6 ) {
        console.log("Sua média é C")
    } else if (average < 6 ) {
        console.log("Sua média é D")
    }
}
calcMedia(nota1,nota2,nota3)