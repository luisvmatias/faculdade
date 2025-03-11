const prompt = require('prompt-sync')({sigint:true})
horario = prompt("digite um horario ente 0h a 23h59: ");
horario = parseInt(horario);

if (horario>=0 && horario <=24) {
    var turno = (horario < 18) ? "diurno" : (horario>=18 && horario <5) ? "noturno" : "noturno"
    console.log(turno)
    console.log("o turno do horario digitado e: ", turno)
} else {
    console.log("digite um horario correto!")
}