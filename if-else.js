const reader = require('readline-sync');

let nota1 = parseInt(reader.question("Digite a primeira nota do aluno"));
let nota2 = parseInt(reader.question("Digite a segunda nota do aluno"));
let nota3 = parseInt(reader.question("Digite a terceira nota do aluno"));
let nota4 = parseInt(reader.question("Digite a quarta nota do aluno"));

function calcularMedia(nota1, nota2, nota3, nota4){
    let message = "";
    let average = (nota1 + nota2 + nota3 + nota4) /4;
    if(average >= 7) {
        console.log("Aprovado")
    }else {
        console.log("Reprovado!! Sinto Muito!!")
    }
    return message
}
calcularMedia(nota1, nota2, nota3, nota4)