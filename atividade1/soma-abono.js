import readline from "readline-sync";

let salario;
let abono;
let novoSalario;

salario = readline.questionFloat("Digite seu salário: ");
abono = readline.questionFloat("Digite seu abono: ");

novoSalario = salario + abono;

console.log("Seu novo salário é: " + novoSalario);

