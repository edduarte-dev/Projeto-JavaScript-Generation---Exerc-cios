import readline from "readline-sync";

let numero1;
let numero2;
let numero3;
let numero4;
let diferenca;

numero1 = readline.questionFloat("Digite um número: ");
numero2 = readline.questionFloat("Digite um número: ");
numero3 = readline.questionFloat("Digite um número: ");
numero4 = readline.questionFloat("Digite um número: ");

diferenca = (numero1*numero2)-(numero3*numero4)

console.log("\n Diferença: " + diferenca.toFixed(2));

