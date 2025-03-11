const prompt = require ('prompt-sync')([{sigint:true}])
var distancia = prompt ("digite a distancia: ")
var horario = prompt ("digite o horario: ")
distancia = Number(distancia)
horario = Number(horario)

function calcularCorrida(horario, distancia) {
    let custoFixo;
    let custoDistancia;

    if (horario >= 0 && horario <= 6) {
        custoFixo = 5.30;
        custoDistancia = 4.40;
    } else if (horario >= 6 + 1/60 && horario <= 18) {
        custoFixo = 3.30;
        custoDistancia = 3.80;
    } else if (horario >= 18 + 1/60 && horario <= 23) {
        custoFixo = 4.30;
        custoDistancia = 4.10;
    } else {
        return "Dados Incorretos"
    }
    let custoTotal = custoFixo + (custoDistancia * distancia);
    return custoTotal.toFixed(2) + " reais.";
} 

console.log("custo da corrida as 4:30am, 15km", calcularCorrida("4 ", 15))