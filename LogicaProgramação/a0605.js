const prompt = require('prompt-sync')({sigint: true});
/* var celsiusTemperature = parseFloat(prompt("Digite uma temperatura em ºC para converter para ºF: "));
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

console.log("A temperatura em Fahrenheit é: " + fahrenheitTemperature.toFixed(2) + " ºF"); */
/* let semana_1 = [74, 64, 76, 71, [72,1 [1,2,4]], 61, 76];
let semana_2 = [74, 61, 68, 67, 73, 77, 81];
let semana_3 = [77, 76, 76, 75, 78, 77, 74];
let semana_4 = [74, 75, 75, 75, 76, 76, 76];
let semana_5 = [77, 77, 77];

function toCelsius(Fahrenheit){
    return (5/9) * (Fahrenheit - 32);
}

console.log(toCelsius(90).toFixed(2));

let tempMes = [semana_1, semana_2, semana_3, semana_4, semana_5];

console.log(tempMes[0][4][2][2]); */

function toCelsius(Fahrenheit){
    return (5/9) * (Fahrenheit - 32);
}

console.log(toCelsius(90).toFixed(2));

let semana_1 = [87,98,78,89,98,90,94];
let semana_2 = [87,98,78,89,98,90,94]
let semana_3 = [87,98,78,67,89,98,90,94]
let semana_4 = [87,98,78,89,98,90,94]
let tempMes = [semana_1, semana_2, semana_3, semana_4]

/*console.log(tempMes[0][4][2][2]); */
/*console.log(tempMes[2][2][1][2][1]); */
for(let i=0; i<tempMes.length; i++){
    console.log(`Tempoeratura da semana ${1+i}:`)
    for(const temp of tempMes[i]){
        console.log(toCelsius(temp).toFixed(2))
    }
}
