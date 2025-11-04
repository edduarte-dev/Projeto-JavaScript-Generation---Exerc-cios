import readlineSync from "readline-sync";

let vetor = [];
let soma = 0;


for (let i = 0; i < 10; i++) {
  let numero = parseInt(readlineSync.question(`Digite o ${i + 1}º número: `));
  vetor.push(numero);
  soma += numero;
}


console.log("\nElementos nos índices ímpares:");
for (let i = 1; i < vetor.length; i += 2) {
  process.stdout.write(vetor[i] + " ");
}


console.log("\n\nElementos pares:");
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    process.stdout.write(vetor[i] + " ");
  }
}

let media = soma / vetor.length;
console.log(`\n\nSoma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);