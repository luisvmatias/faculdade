var input = require("fs").readFileSync("stdin4", "utf8");
var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseInt(valores.shift());
var D = parseInt(valores.shift());

var DIFERENCA = A * B - C * D;

console.log("DIFERENÇA= " + DIFERENCA);

var E = parseInt(valores.shift());
var F = parseInt(valores.shift());
var G = parseInt(valores.shift());
var H = parseInt(valores.shift());

var DIFERENCA2 = E * F - G * H;

console.log("DIFERENÇA= " + DIFERENCA2);

var I = parseInt(valores.shift());
var J = parseInt(valores.shift());
var K = parseInt(valores.shift());
var L = parseInt(valores.shift());

var DIFERENCA3 = I * J - K * L;

console.log("DIFERENÇA= " + DIFERENCA3);