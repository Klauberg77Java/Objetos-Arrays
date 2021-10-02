// * Nessa atividade, preciso criar uma variável para armazenar os números 5,3,1,4 e 2.
// * Criamos uma função, calcLessNote.
// * Depois disso, teria que fazer uma procura dentro do for pra achar o menor numero dentro do Array.
// * Com isso, podemos começar a contar com o valor 0.
// * Depois disso, faremos uma procura dentro do for.
// * Após isso, teremos que fazer uma verificação, se o menor número for o menor.
// * Assim, o menor é igual ao valor dentro da posição.
// * Depois disso, daremos o resultado do menor número dentro do Array.
// * Por fim, retornaremos a função.

let values = [5,3,1,4,2]
calcLessNote(values);
calcBiggerValue(values);



function calcLessNote(values) {
    let menor = values.length && values[0];
    for(let posicao = 0; posicao < values.length; posicao++) {
        if(values[posicao] < menor) {
            menor = values[posicao]
        }
    }
    console.log(menor)
}



// * Nesse exercicio, precisamos achar o maior número dentro do Array.
// * Primeiro, precisamos criar uma função com o nome calcBiggerValue.
// * Proximo passo, precisamos criar uma variavel maior.
// * Em seguida, vamos começar com o valor da posição de 0.
// * Após isso, faremos uma verificação, se o maior numero dentro da posição for maior. Então, maior é o número dentro da posição.
// * No final, daremos o resultado do maior número dentro do Array.
// * Após isso, retornaremos a função.

function calcBiggerValue(values) {
    let maior = values.length && values[0];
    for(let posicao = 0; posicao < values.length; posicao++) {
        if(values[posicao] > maior) {
            maior = values[posicao]
        }
    }
    console.log(maior)
}

