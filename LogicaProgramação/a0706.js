/* push(.) + */
let a= [1,2,3,4,5,6,7];
let acrescentar_final= a.push(7, 14);
console.log(acrescentar_final);
console.log(a);

/* pop() - */
let remocao_final= a.pop();
console.log(remocao_final);
console.log(a);

/* unshift(.) + */
let adicao_inicio= a.unshift(100);
console.log(adicao_inicio);
console.log(a);
console.log(a.indexOf(100));
console.log(a.indexOf(200));

/* shift() - */
let remocao_inicio= a.shift();
console.log(remocao_inicio);
console.log(a);

/* splice(...) */
let remocao_terceiro= a.splice(2,1);
console.log(remocao_terceiro);
console.log(a);
//remover ou adicionar
let remocao_adicao= a.splice(2, 2, 22, 23);
console.log(remocao_adicao);
console.log(a);

let numeros= [7, 14, 21, 28, 35];
let k= 2;
let dobro_numeros= []
for(let numero of numeros){
    let aux= k*numero;
    dobro_numeros.push(aux);
    console.log(dobro_numeros);
}
/* map */
console.log(numeros);
console.log(dobro_numeros);
let dobro_numeros_map = numeros.map(x => k*x);
console.log(dobro_numeros_map);

/* filter */
let filtro= numeros.filter(x => x >=21);
console.log(filtro);