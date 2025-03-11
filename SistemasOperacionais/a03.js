var input = require("fs").readFileSync("stdin3", "utf8");
var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

var media = (A * 3.5 + B * 7.5) / 11;
console.log("MEDIA = " + media.toFixed(5));

var C = parseFloat(valores.shift());
var D = parseFloat(valores.shift());

var media2 = (C * 3.5 + D * 7.5) / 11;
console.log("MEDIA = " + media2.toFixed(5));

var E = parseFloat(valores.shift());
var F = parseFloat(valores.shift());

var media3 = (E * 3.5 + F * 7.5) / 11;
console.log("MEDIA = " + media3.toFixed(5));