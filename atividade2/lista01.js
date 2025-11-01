import readline from "readline-sync";

let valorA;
let valorB;
let valorC;
let somaValor;

valorA = readline.questionInt("Digite primeiro valor: ");
valorB = readline.questionInt("Digite segundo valor: ");
valorC = readline.questionInt("Digite o terceiro valor: ");

somaValor = valorA + valorB;

if (somaValor > valorC) {
  console.log("A soma dos valores A e B é maior que C.");
} else if (somaValor === valorC) {
  console.log("A soma dos valores A e B é igual a C.");
} else {
  console.log("A soma dos valores A e B é menor que C.");
}
