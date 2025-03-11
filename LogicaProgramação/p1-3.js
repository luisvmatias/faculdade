/* Luis Victor Sousa Matias - 24114290192 */

const prompt = require('prompt-sync')({sigint: true})
var aniversario = 1999;
var tresPrimeirosDigitosMatricula = 241;
var tresUltimosDigitosMatricula = 192;

var tentativas = 5;
var entrada = parseInt(prompt("Tente adivinhar um dos valores numéricos preestabelecidos:\nDigite um número:"));
while (tentativas > 0) {


    if (entrada === aniversario || entrada === tresPrimeirosDigitosMatricula || entrada === tresUltimosDigitosMatricula) {

        console.log("Parabéns! Você acertou um dos números preestabelecidos.");
        break;
    } else {

        console.log("Número incorreto. Tente novamente.");
        tentativas--;
    }
}

if (tentativas === 0) {
    console.log("Você excedeu o número máximo de tentativas. O programa foi encerrado.");
}
