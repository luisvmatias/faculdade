const prompt = require("prompt-sync")({sigint: true})

var corluz;
corluz = prompt("digite a cor atual da do semaforo: ");
corluz = corluz.toLowerCase();

if (corluz === 'verde'){
    console.log("siga")
} else if (corluz === 'amarelo'){
    console.log("atenção")
} else if (corluz === 'vermelho'){
    console.log("pare")
} else if (corluz === "preto"){
    console.log("não esta funcionando")
} else {
    console.log("para de ser louco!")
}