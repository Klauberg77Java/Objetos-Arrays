//1) Crie um script que socilite 5 notas e em seguida calcule a média das notas informadas.
const reader = require('readline-sync');

let nota1 = parseInt(reader.question("Digite a primeira nota "));
let nota2 = parseInt(reader.question("Digite a segunda nota "));
let nota3 = parseInt(reader.question("Digite a terceira nota "));
let nota4 = parseInt(reader.question("Digite a quarta nota "));
let nota5 = parseInt(reader.question("Digite a quinta nota "));

calcularMedia(nota1,nota2,nota3,nota4,nota5)


function calcularMedia(nota8, nota7, nota6, nota10, nota5){
    let result = (nota8 + nota7 + nota6 + nota10 + nota5) / 5;
    console.log("O resultado da média é ",result);
}







