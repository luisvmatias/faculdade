const prompt = require('prompt-sync')({sigint: true})
var serviços;
serviços = prompt("digite o serviço desejado: ")
serviços = serviços.toLowerCase();

if (serviços === "manutencao"){
    console.log("a partir de 119,90")
} else if (serviços === "revisao"){
    console.log("a partir de 269,90")
} else if (serviços === "alinhamento"){
    console.log("a partir de 64,90")
} else if (serviços === "balanceamento"){
    console.log("a partir de 24,90 por roda")
} else if (serviços === "manutencao corretiva") {
    console.log("consultar oficina para esse tipo de serviço")
} else if (serviços === "outros"){
    console.log("consultar oficina para essa opção")
} else {
    console.log("digite uma opção valida")
}