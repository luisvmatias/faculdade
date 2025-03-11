/*function isEven(x){
    return console.log((x % 7 ===0)? true : false);
}
let array = [1, 7, 12, 21, 29, 35, 57, 63];
array.forEach(isEven);

function mod3_1(x){
    return console.log((x % 3 === 1)? true : false);
}
array.forEach(mod3_1); */
/*
const prompt = require('prompt-sync')({sigint: true})
let pais = prompt("Digite um pais: ");
for(letra of pais){
    console.log(letra);
}
*/

let anoInicial = 1896;
let anoFinal = 2020;
let anosSemOlimpiadas = [1916, 1940, 1944];
let anosOlimpiadas = [];
for(let i= anoInicial; i<= anoFinal; i++){
    if (i %4 ===0 && !anosSemOlimpiadas.includes(i)){
        anosOlimpiadas.push(i);
    }
}
for(let ano of anosOlimpiadas){
    console.log(`As Olimpiadas de numero 
    ${1+anosOlimpiadas.indexOf(ano)} ocorreu no ano ${ano}`)
}