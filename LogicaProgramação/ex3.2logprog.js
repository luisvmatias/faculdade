const prompt = require('prompt-sync')({sigint:true})
horario = prompt("digite um horario entre 0h a 23h59: ")
horario = parseInt(horario)
var turno = (horario < 18) ? "diurno" : (horario>=18 && horario <5) ? "noturno" : "noturno"
console.log(turno)
console.log("o horario referido e definido como: ", turno)