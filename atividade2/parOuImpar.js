import readline from "readline-sync";

let numero = readline.questionInt("Digite um número: ");

// Verificação de par ou ímpar:
if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

// Verificação de positivo ou negativo:
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}
