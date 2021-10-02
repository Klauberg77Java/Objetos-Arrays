
const students = [
    {
        id:1,
        name:"João",
        age: 15,
        note:7
    },
    {
        id:2,
        name:"Maria",
        age: 15,
        note:8
    },
    {
        id:3,
        name:"Joana",
        age: 17,
        note:10
    },
    {
        id:4,
        name:"Carmen",
        age: 16,
        note:8
    },
    {
        id:5,
        name:"Luciano",
        age: 15,
        note:5
    },{
        id:6,
        name:"Alexandra",
        age: 16,
        note:5
    },
    {
        id:7,
        name:"Alan",
        age: 17,
        note:7
    },
    {
        id:8,
        name:"Fernanda",
        age: 15,
        note:8
    },
    {
        id:9,
        name:"Clarice",
        age: 16,
        note:10
    },
    {
        id:10,
        name:"Ana",
        age: 17,
        note:6
    }
]

//calcular a média de idade dos estudantes
calcAgeAverage(students);
//calcular a média das notas dos estudantes
calcNoteAverage(students);
//calcular a soma das idades dos estudantes
calcAgeSum(students)
//calcular a quantidade de estudantes que tiveram nota >= 7
calcLengthStudentsWithAverageGrateSeven(students)
//calcular a quantidade de estudantes que tiveram a nota acima da média da turma
calcLengthStudentsOverAverage(students)

function calcAgeAverage(students){
    let soma = 0;
    for(let index = 0; index < students.length;index++){
        soma = soma + students[index].age
    }
    const media = soma /students.length
    console.log(media)
}

function calcNoteAverage(students){
    let soma = 0;
    for(let index = 0; index < students.length;index++){
        soma = soma + students[index].note
    }
    const media = soma /students.length
    console.log(media)

function calcAgeSum(students){
        let total = 0;
        for (let index = 0; index < students.length; index++) {
              total =  total + students[index].age
        }
        const total = soma / students.length
        console.log(total)
    }
} 