import readline from "readline-sync";

let numero1 = readline.questionFloat("Digite o 1º número: ");
let numero2 = readline.questionFloat("Digite o 2º número: ");
let operacao = readline.questionInt("Operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão): ");

let resultado;
let simbolo;

switch (operacao) {
  case 1:
    resultado = numero1 + numero2;
    simbolo = "+";
    break;
  case 2:
    resultado = numero1 - numero2;
    simbolo = "-";
    break;
  case 3:
    resultado = numero1 * numero2;
    simbolo = "*";
    break;
  case 4:
    if (numero2 === 0) {
      console.log("Erro: divisão por zero!");
      process.exit();
    }
    resultado = numero1 / numero2;
    simbolo = "/";
    break;
  default:
    console.log("Operação Inválida!");
    process.exit();
}

console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`);