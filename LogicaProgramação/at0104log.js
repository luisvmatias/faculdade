const prompt = require('prompt-sync')({sigint: true})
let cor
cor = prompt ("digite uma cor do semáforo: ");
cor = cor.toLowerCase();
switch (cor) {
    case "verde":
        console.log("Siga");
        break
    case "amarelo":
        console.log("Atenção");
        break
    case "vermelho":
        console.log("Pare");
        break
    default:
        console.log("digite uma cor de semáforo!")
        break
} 