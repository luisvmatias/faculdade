var horario;
horario=20
var turno = (horario < 18) ? "diurno" : (horario>=12 && horario <5 ? "noturno" : "noturno")
console.log(turno)