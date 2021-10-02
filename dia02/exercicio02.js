//2) Crie um script que solicite 3 notas, calcule a média das notas e em seguida apresente uma mensagem indicando se o aluno foi aprovado ou reprovado. Concidere aprovado o aluno que possuir a média maior ou igual a 7

const reader = require('readline-sync');

let nota1 = parseInt(reader.question("Digite a primeira nota "));
let nota2 = parseInt(reader.question("Digite a segunda nota "));
let nota3 = parseInt(reader.question("Digite a terceira nota "));

calcularNota(nota1,nota2,nota3)

function calcularNota(value1, value2, value3){
    let message = "";
    let average = (value1+value2+value3) /3;
    if (average >= 7){
        message = "Aprovado";
    } else {
        message = "Reprovado"
    }
    console.log(message)
}

