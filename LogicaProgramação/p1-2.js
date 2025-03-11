/* Luís Victor Sousa Matias - 24114290192 */

var primeiroAno = 1930;
var ultimoAno = 2022;
var ano = primeiroAno;

console.log("Anos das Copas do Mundo:");
while (ano <= ultimoAno) {
    if (ano != 1942 && ano != 1946) {
        console.log(ano);
    }
    ano += 4;
}
