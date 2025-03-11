const prompt = require('prompt-sync')({sigint:true})
var bebida;
bebida = prompt("digite uma idade: ")
bebida = parseInt(bebida)

if(bebida < 18){
console.log("nao pode ingerir bebias alcoolicas de acordo com a lei")
} else if (bebida < 50){
    console.log("pode ingerir bebidas alcoolicas de acordo com a lei")
} else if (bebida < 65){
    console.log("pode ingerir bebidas alcoolicas com moderaçao")
} else if (bebida < 85){
    console.log("nao se deve consumir bebidas alcoolicas")
} else {
    console.log("digite uma idade correta")
}