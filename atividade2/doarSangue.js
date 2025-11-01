import readline from "readline-sync";

// Entrada de dados
let nome = readline.question("Digite o nome do doador: ");
let idade = readline.questionInt("Digite a idade do doador: ");
let primeiraDoacao = readline.question("Primeira doação de sangue? (s/n): ") === "true";

let apto = false;

if (idade >= 18 && idade < 60) {
  apto = true;
} else if (idade >= 60 && idade <= 69 && primeiraDoacao) {
  apto = true;
}

if (apto) {
  console.log(`${nome} está apto para doar sangue!`);
} else {
  console.log(`${nome} não está apto para doar sangue!`);
}