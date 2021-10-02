const teclado = require('readline-sync');

function mostrarOpcoesMenuPrincipal(){
    console.log("1 - responder rapidamente");
    console.log("2 - Demorar e levar uma livrada na cabeça");
    console.log("3 - Chamar a mãe");
}

function tratarOpcaoSelecionadaMenuPrincipal(opcao){
    if (opcao == 1) {
        console.log("Escolha inteligente, pequeno gafanhoto");
    } else if (opcao == 2) {
        console.log("Você precisa ser mais ágil pequeno gafanhoto");
    } else if (opcao == 3) {
        console.log("Você não é um gafanhoto e sim uma bixona");
    } else {
        console.log("Opção inválida, leia com atenção seu mané!!!");
    }
}



function menuPrincpal() {
    let opcao = -1;
    while (opcao != 1) {
       mostrarOpcoesMenuPrincipal();
        opcao = parseInt(teclado.prompt());
        tratarOpcaoSelecionadaMenuPrincipal(opcao);
    }
}

menuPrincpal()
console.log("Fim da aplicação");

