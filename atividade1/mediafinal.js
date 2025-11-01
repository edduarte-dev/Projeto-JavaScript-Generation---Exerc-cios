import readline from "readline-sync";

let nota1;
let nota2;
let nota3;
let nota4;
let mediafinal;

nota1 = readline.questionFloat("Digite a nota da primeira prova do aluno: ");
nota2 = readline.questionFloat("Digite a nota da segunda prova do aluno: ");
nota3 = readline.questionFloat("Digite a nota da terceira prova do aluno: ");
nota4 = readline.questionFloat("Digite a nota da quarta prova do aluno: ");

mediafinal = (nota1 + nota2 + nota3 + nota4)/4;

console.log("Média final do aluno: " + mediafinal);

