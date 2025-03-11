function calcularCustoCorrida(horario, distancia) {
    let custoFixo;
    let custoPorKm;

    // Convertendo o horário para minutos
    const horarioMinutos = Number(horario.split(":")[0]) * 60 + Number(horario.split(":")[1]);

    if (horarioMinutos >= 0 && horarioMinutos <= 6 * 60) {
        custoFixo = 5.30;
        custoPorKm = 4.40;
    } else if (horarioMinutos >= 6 * 60 + 1 && horarioMinutos <= 18 * 60) {
        custoFixo = 3.30;
        custoPorKm = 3.80;
    } else if (horarioMinutos >= 18 * 60 + 1 && horarioMinutos <= 23 * 60 + 59) {
        custoFixo = 4.30;
        custoPorKm = 4.10;
    } else {
        return "Horário inválido";
    }

    const custoTotal = custoFixo + (custoPorKm * distancia);
    return custoTotal.toFixed(2) + " reais";
}

// Testando o programa com os cenários fornecidos
console.log("Custo da corrida às 4:30 am, 15 km:", calcularCustoCorrida("04:30", 15));
console.log("Custo da corrida às 15:00, 20 km:", calcularCustoCorrida("15:00", 20));
console.log("Custo da corrida às 22:43, 12.7 km:", calcularCustoCorrida("22:43", 12.7));