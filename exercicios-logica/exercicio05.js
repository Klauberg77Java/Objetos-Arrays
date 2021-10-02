// * Nesse exercicio, precisamos pedir pro usuário digitar as informações do produto, como: código do produto, valor do produto e o nome do produto.
// * Em seguida, a máquina precisar ler as informações do Produto e guardar dentro de uma variável.
// * Precisamos criar uma variavel produto e guardar as informações como: nome, valor e código.
// * Logo podemos adicionar um produto Novo.
// * Depois disso, mandamos uma seguinte mensagem: ("Produto cadastrado com Sucesso!!!").

const reader = require('readline-sync');

let produtos = [];

function inserirProduto() {

console.log("Digite o código do Produto");
let codigo = parseInt(reader.prompt());
console.log("Digite o nome do Produto");
let nome = reader.prompt();
console.log( "Digite o valor do Produto");
let preco = parseFloat(reader.prompt());

let produto = {
    nome,
    codigo,
    preco
}
produtos.push(produto)
console.log("Produto cadastrado com Sucesso!!!");
}
inserirProduto();

// * Nessa atividade, preciso pedir pro usuário indicar o código do produto que ele deseja atualizar.
// * Após isso, precisamos que a máquina leia o código e guardar essa informação.
// * Após isso, precisamos fazar a procura do produto dentro do for.
// * Com isso, começamos criando uma variavel com o valor = -1, porque nao sabemos a posição.
// * Após isso, temos que que fazer uam comparação, se o codigo do produto for igual ao produto que o usuário digitou, podemos atualizar.
// * Depois, fazemos mais uma verificação, se a posição do produto encontrado for maior que o valor -1, pedimos pro usuário digitar o codigo do produto e o preço do produto.
// * Assim, podemos atualizar o nome e o preço do Produto.
// * Mandamos uma seguinte mensagem: ("Produto atualizado com Sucesso!!!");
// * Se não mandamos uma seguinte mensagem: ("Falha ao atualizar o Produto!!!");

function atualizarProduto() {
console.log("Informe o código");
let codigo = parseInt(reader.prompt());

let posicao = -1;
for(let index = 0; index < produtos.length; index++) {
    if (produtos[index].codigo == codigo) {
        posicao = index;
        break;
    }
    if(posicao > -1) {
        let nome = (reader.question("Digite o nome do Produto"));
        let preco = parseFloat(reader.question("Digite o preço do produto"));
        produtos[posicao].nome = nome
        produtos[posicao].preco = preco
        console.log("Produto atualizado com Sucesso!!!")
    } else {
        console.log("Falha ao tentar atualizar o Produto!!!");
    }
}
}
atualizarProduto();