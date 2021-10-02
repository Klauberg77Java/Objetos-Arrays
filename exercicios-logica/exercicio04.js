// * Nesse exercicio, precisamos pedir pro usuário digitar 3 notas de alunos.
// * Depois, a máquina teria que ler a informação e logo guardar as informações.
// * Logo em seguida, precisamos fazer a soma, para depois faze a média.
// * Depois disso, precisamos fazer uma verificação.
// * se o resultado da média do aluno  for maior ou igual a 9, mandaremos a seguinte mensagem: "Sua média é A+ ", se for maior ou igual a 8 e menor que 9, mando a seguinte mensagem: "Sua nota é B+", se a média for maior ou igual a 7 e menor que 8, mando a seguinte mensagem: "Sua nota é B-", se a média for maior ou igual a 6 e menor que 7, mando a seguinte mensagem: "Sua nota é Nota C", se a média for menor que 6, mando a seguinte mensagem: "Sua nota é D".
const reader = require('readline-sync');

console.log("Digite a primeira nota!!!");
let nota1 = parseInt(reader.prompt());
console.log("Digite a segunda nota");
let nota2 = parseInt(reader.prompt());
console.log("Digite a terceira nota");
let nota3 = parseInt(reader.prompt());
calcMedia(nota1,nota2,nota3);


function calcMedia(nota1,nota2,nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    if (media >= 9) {
        console.log("Sua média é A+ !!!");
    } else if(media >= 8 && media < 9) {
        console.log("Sua média é B+ !!!");
    } else if(media >= 7 && media < 8) {
        console.log("Sua média é B- !!!");
    } else if(media >= 6 && media < 7) {
        console.log("Sua média é C"); 
    } else if(media < 6) {
        console.log("Sua média é D, Reprovado !!!");
    }
}
