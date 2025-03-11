let pessoas = {
    nomes : ["Ana", "Beatriz", "Carlos"],
    naturalidades: ["GO","MG","BA"],
    idades: [28,19,47]
}
console.log(`${Object.values(pessoas)[0][0]} ${Object.values(pessoas)[2][0]} `)
console.log(pessoas);
console.log(Object.keys(pessoas));

console.log(Object.keys(pessoas)[0]);
console.log(Object.keys(pessoas)[1]);
console.log(Object.keys(pessoas)[2]);

console.log(Object.values(pessoas)[0][1]);
console.log(Object.values(pessoas)[1][1]);
console.log(Object.values(pessoas)[2][1]);

console.log(pessoas.naturalidades);
console.log(pessoas["naturalidades"]);
//console.log(pessoas[naturalidades]);  error

//console.log(Object.values(pessoas));
console.log(Object.getOwnPropertyNames(pessoas));

for(let i in pessoas.nomes){
    console.log(pessoas.nomes[i])
}