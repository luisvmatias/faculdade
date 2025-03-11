// Funções
function somar (numA, numB) {
    const resultado = numA + numB
    console.log(resultado)
}

// Uso
somar(2,2)
somar(4,3)
somar(7,3)

// Função Anônima
const subtrair = function (numA, numB){
    const resultado = numA - numB
    console.log(resultado)
}
subtrair(4,2)
subtrair(4,3)
subtrair(4,4)

//importar função de outro arquivo

import {calcularIMC} from "./calculadoraIMC.js"

const res = calcularIMC(68, 160)
console.log(res)