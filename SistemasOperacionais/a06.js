var input = require("fs").readFileSync("stdin6", "utf8");
var calculo = input.split("\n");

var entrada = parseFloat(input);
var resultado = (4/3) * 3.14159 * Math.pow(entrada, 3);
console.log("volume = " + resultado.toFixed(3));