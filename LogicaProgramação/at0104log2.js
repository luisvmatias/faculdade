const prompt = require('prompt-sync')({sigint:true})
let day;
day = prompt("Digite o dia do seu aniversário: ");
day = Number(day);
let month = prompt("digite o mes do seu aniversário: ");
month = Number(month);
let signo;

switch(month) {
    case 1: signo = (day <= 20) ? "capricornio" : "aquario"
    console.log("o signo dessa data e", signo)
    break
    case 2: signo = (day <= 19) ? "aquario" : "peixes"
    console.log("o signo dessa data e", signo)
    break
    case 3: signo = (day <= 20) ? "peixes" : "aries"
    console.log("o signo dessa data e", signo)
    break
}