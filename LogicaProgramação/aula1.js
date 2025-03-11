const prompt = require("prompt-sync")({sigint : true})
var idade;
idade= prompt("digite uma idade:")
idade= parseInt(idade);

if (idade < 12){
    console.log("essa pessoa e uma criança")
}
else if (idade < 18){
    console.log("essa pessoa e menor de idade")
}
else if (idade < 60){
    console.log("a pessoa e maior de idade e jovem")
}
 else if (idade < 100){
    console.log("a pessoa e idosa")
} 
else {
    console.log("a pessoa viveu muito e tem muita historia pra contar")
}

//usar terminal toda vez que executar algo!