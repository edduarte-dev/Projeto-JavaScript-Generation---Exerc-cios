import readline from "readline-sync";

let salariobruto;
let adicionalnoturno;
let horasextras;
let descontos;
let salarioliquido;

salariobruto = readline.questionFloat("Digite o Salário Bruto: ");
adicionalnoturno = readline.questionFloat("Digite o Adicional Noturno: ");
horasextras = readline.questionFloat("Digite a quantidade de Horas Extras: ");
descontos = readline.questionFloat("Digite os Descontos: ");

salarioliquido = salariobruto + adicionalnoturno + (horasextras * 5) - descontos;

console.log("\nSALÁRIO LÍQUIDO: R$ " + salarioliquido.toFixed(2));



