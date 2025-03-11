/*
let numeros = [3, 6, 9, 12]
for(let numero of numeros){
    console.log(2*numero)
} */

/*
let numeros = [2,7,8,9]
for(const numero of numeros){
    console.log(2*numero)
} */

/*
let numeros = [2,7,8,9]
for (let i= 0; i<numeros.length; ++i){
    console.log(2*numeros[i])
} */

/*
let anosCopa = [2022]
for (let i=0; i<anosCopa.length; i++){
    if (anosCopa.push(i)){
        console.log(-4+anosCopa[i])
        ++i
    }
}
*/

let anoInicial = 1930;
let anoFinal = 2022;
let anosSemCopa = [1942, 1946];
let anosCopa = [];
for(let i= anoInicial; i<= anoFinal; i++){
    if (i %4 ===2 && !anosSemCopa.includes(i)){
        anosCopa.push(i);
    }
}
for(let ano of anosCopa){
    console.log(`A copa do mundo de numero 
    ${1+anosCopa.indexOf(ano)} ocorreu no ano ${ano}`)
}