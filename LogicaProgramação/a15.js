/* const prompt = require ('prompt-sync')({sigint : true})
/*let altura = prompt ("digite a sua altura: ")
idade = Number(altura)
let decisao = (altura >=1.60 && altura <=2.00) ? "pode entrar" : "não pode entrar"
console.log(decisao)

console.log(Math.floor(6.7))
console.log(Math.ceil(6.7))
console.log(Math.pow(2,10)) //2**10 */

/* let i=0
while(i<4){
    console.log("saia da praia, aviso", i+1)
    i+=1
}*/

const prompt = require ("prompt-sync")({sigint : true})
let preco_premiado = 2700;
let preco_palpite = Number (prompt ("Dê seu palpite sobre o preço do celular:"));
while (preco_palpite !== preco_premiado ){
    console. log("O celular ainda não é seu, tente outra vez!") 
    preco_palpite = Number (prompt ("Dê seu palpite sobre o preço do celular:"))
}
console. log("Parabéns o celular é seu. O valor exato é", preco_premiado)