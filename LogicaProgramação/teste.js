const prompt = require('prompt-sync')({sigint : true})
var idade;
idade = prompt("digite uma idade:")
console.log(typeof idade)
idade = parseInt(idade)

if (idade < 18){
    console.log("a pessoa e menor de idade")
} else {
    console.log("a pessoa e maior de idade")
}