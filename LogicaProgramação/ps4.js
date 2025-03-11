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
if (anosOlimpiadas.length >= 14) {
    console.log(`A décima quarta Olimpíada ocorreu no ano: ${anosOlimpiadas[13]}`);
}
let olimpiadas1900a2000 = anosOlimpiadas.filter(ano => ano >= 1900 && ano <= 2000);
console.log(`O número de Olimpíadas entre 1900 e 2000 foi: ${olimpiadas1900a2000.length}`);
console.log(`Número total de edições de Olimpíadas desde 1896: ${anosOlimpiadas.length}`);