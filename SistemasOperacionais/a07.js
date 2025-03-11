var input = require("fs").readFileSync("stdin7", "utf8");
var linhas = input.split("\n");

const [A, B, C] = input.split(" ").map (item => parseInt(item));
const maiorAB = (A + B + Math.abs(A - B)) /2;
const maior = (C + maiorAB + Math.abs(maiorAB - C)) /2;

console.log(`${maior} e o maior`);