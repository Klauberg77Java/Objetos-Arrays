// Literal
let Pessoa = {
    nome: 'Arthur',
    idade: '17 anos',
    altura: '1.67',
    peso: '52',
    acordar: function() {
        console.log("Estou acordando!!!")
    },
    trabalhar: function() {
        console.log("Estou indo Trabalhar!!!")
    }
}
console.log("Meu nome é",Pessoa.nome);
console.log("Minha idade é",Pessoa.idade);
console.log("Minha altura é",Pessoa.altura);
console.log("Meu peso é",Pessoa.peso);
Pessoa.acordar();
Pessoa.trabalhar();

//Funções construtoras
function Person(nome,idade,altura,peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso; 
    this.acordar = function() {
        console.log(nome, 'Está acordando...')
    }
}

let gustavo = new Person('gustavo',37,70);

console.log(gustavo.nome);
console.log(gustavo.idade);
console.log(gustavo.peso); 
gustavo.acordar


//classes
class Carro {
    constructor(ano, cor, modelo) {
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar(){
        console.log("Ligando o carro ", this.modelo);
    }
}

let car1 = new Carro(2020,'Prata','Civic');
let car2 = new Carro(2007,'Prata','Peugeot');

console.log(car1.ano);
console.log(car1.cor);
console.log(car1.modelo);
car1.ligar();