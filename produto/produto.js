const reader = require('readline-sync');

function mostrarOpcoes() {
    console.log("1 - Incluir novos Produtos ");
    console.log("2 - Realizar a consulta de um Produto");
    console.log("3 - Atualizar um Produto existente");
    console.log("4 - Remover um Produto");
    console.log("5 - Apresentar os Produtos de maior valor");
    console.log("6 - Apresentar os Produtos de menor valor");
    console.log("7 - Apresentar os Produtos que possuem valor acima da média");
    console.log("8 - Apresentar os Produtos que possuem valor abaixo da média");
    console.log("9 - Listar todos os produtos");
}

function tratarOpcaoSelecionada(opcao) {
    if (opcao == 1) {
        console.log("Incluindo novos Produtos");
        inserirProduto();
    } else if (opcao == 2) {
        console.log("Realizando a consulta de um Produto");
    } else if (opcao == 3) {
        console.log("Atualizando o Produto");
        atualizarProduto();
    } else if (opcao == 4) {
        console.log("Removendo um Produto");
        removerProduto();
    } else if (opcao == 5) {
        console.log("Apresentando Produtos De maior valor");
        maiorValor();
    } else if (opcao == 6) {
        console.log("Apresentando os Produtos de menor valor");
        menorValor();
    } else if (opcao == 7) {
        console.log("Apresentando os Produtos que possuem valor acima da média");
        valorAcimaMedia();
    } else if (opcao == 8) {
        console.log("Apresentando os Produtos que possuem valor abaixo da média");
        valorabaixoMedia();
    } else if (opcao == 9) {
        console.log("Listando todos os Produtos");
        listarTodosProdutos();
    }
}

let produtos = []

function inserirProduto() {
    let codigo = parseInt(reader.question("Digite o codigo do Produto"));
    let nome = reader.question("Digite o nome do produto");
    let valor = parseFloat(reader.question("Digite o valor do Produto"));
    let produto = {
        codigo,
        nome,
        preco: valor
    }
    produtos.push(produto)
    console.log("Produto adicionado com Sucesso");
}

function listarTodosProdutos() {
    for (let posicao = 0; posicao < produtos.length; posicao++) {
        const produtoAtual = produtos[posicao]
        console.log(produtoAtual.codigo, produtoAtual.nome, produtoAtual.preco)
    }
}

function removerProduto() {
    //pedir para p usuário informar o código do produto
    console.log("Informe o código do produto");
    //ler o código do produto digitado pelo usuário
    let codigo = parseInt(reader.prompt());
    //procurar a posiçao do produto no array
    let posicao = -1;
    for (let index = 0; index < produtos.length; index++) {
        if (produtos[index].codigo == codigo) {
            posicao = index;
            break;
        }
    }
    //remover o produto do array de acordo com a posição encontrada
    if (posicao > -1) {
        produtos.splice(posicao, 1);
        console.log("Produto removido com sucesso")
    } else {
        console.log("Não foi possível remover o produto com o código informado");
    }
}


function maiorValor() {
    let maior = produtos.length && produtos[0]
    for (let posicao = 0; posicao < produtos.length; posicao++) {
        if (produtos[posicao].preco > maior.preco) {
            maior = produtos[posicao]
        }
    }
    console.log(maior)
}

function menorValor() {
    let menor = produtos.length && produtos[0]
    for(let index = 0; index < produtos.length; index++) {
        if (produtos[menor].preco < menor.preco) {
            menor = produtos[posicao]
        }
    }
    console.log(menor)
}

function atualizarProduto() {
    // Pedir pro usuário indicar o produto que ele precisa atualizar
    console.log("Informe o Código");
    //Ler o código que o usuário digitou
    let codigo = parseInt(reader.prompt());
    //Procurar a posicao do Produto dentro do Array
    let posicao = -1;
    for(let index = 0; index < produtos.length; index++) {
        if (produtos[index].codigo == codigo) {
            posicao = index;
            break;
        }
    } 

    //Verificamos Se a Posição foi encontrada, se for encontrada podemos atualizar
   
    if(posicao > -1) {
        //Pedir pro usuário informar o nome do produto
        let nome = reader.question("Digite o nome do produto");
        //Pedir pro usuário informar o preço do produto
        let preco = parseFloat(reader.question("Digite o preço do produto"));
        //Atualizar o nome do produto
        produtos[posicao].nome = nome
        //Atualizar o preço do produto
        produtos[posicao].preco = preco
        console.log("Produto atualizado com Sucesso!!!")
    } else {    
        console.log("Falha ao tentar atualizar!!!")
    }
}

function valorAcimaMedia() {
    //Fazer a média.
    const media = total / produtos.length
    
    // Fazer a comparação.
    let maior = -1 ;
    for(let index = 0; index < produtos.length; index++) {
        if (produtos[index] > media) {
            maior = produtos[index]
        }
    console.log(media)
    }
    //Se achar o produto, deixar uma mensagem de sucesso. Se não, deixar uma mensagem de falha.
    if (produtos > maior) {
        console.log("Produto acima da media encontrado com Sucesso!!!")
    } else {
        console.log("Falha ao buscar o Produto")
    }
}

function valorabaixoMedia() {
    //Fazer a média.
    const media = total / produtos.length

    //Fazer a comparação.
    let total = -1
    for(let index = 0; index < produtos.length; index++) {
        if (produtos[index] < media) {
        }
    }
    if (produtos < media) {
        console.log("Produto abaixo da media encontrado");
    } else {
        console.log("Falha ao buscar o Produto")
    }
}

let opcao = -1;
while (opcao != 10) {
    mostrarOpcoes();
    opcao = parseInt(reader.prompt());
    tratarOpcaoSelecionada(opcao);
}