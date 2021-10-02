// * Nesse exercicio, precisamos pedir pro usuário digitar os valores dos lados do quadrado.
// * Em seguida, a máquina precisa ler esses valores e em seguida guardar esses valores.
// * Assim, precisamos pegar os valores de cada lado do quadrado e multiplicar esses lados.
// * Assim, Daremos o resultado da Área do quadrado.

const reader = require('readline-sync');

console.log("Digite o primeiro valor");
let lado1 = parseFloat(reader.prompt());
multiplicarLados(lado1,lado1);

function multiplicarLados(lado1,lado1) {
    const multiplicacao = (lado1 * lado1)
    console.log("O resultado da área do quadrado é ",multiplicacao);
}