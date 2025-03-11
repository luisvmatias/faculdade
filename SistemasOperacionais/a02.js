var input = require("fs").readFileSync("stdin2", "utf8");
var lines = input.split("\n");

var PI = 3.14159;
var raio = parseFloat(lines[0]);
var raio2 = parseFloat(lines[1]);
var raio3 = parseFloat(lines[2]);
var A = PI * Math.pow(raio, 2);
var B = PI * Math.pow(raio2, 2);
var C = PI * Math.pow(raio3, 2);

console.log("A = " + A.toFixed(4));
console.log("B = " + B.toFixed(4));
console.log("C = " + C.toFixed(4));