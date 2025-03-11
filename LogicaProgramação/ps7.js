/* Atividade 1 */
        
/* Funções Numéricas*/
function quadrado(numero) {
    return numero * numero;
}
let resultado = quadrado(5);
console.log(resultado);

function somaLista(numeros) {
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    return soma;
}
resultado = somaLista([1, 2, 3, 4]);
console.log(resultado);
       
/* Funções Não Numéricas */
function inverterString(s) {
    return s.split('').reverse().join('');
}
resultado = inverterString("hello");
console.log(resultado);

function juntarStrings(lista) {
    return lista.join(' ');
}
resultado = juntarStrings(["olá", "mundo"]);
console.log(resultado);

/* Atividade 2 */
function mensagemBemVindo() {
    console.log("Bem-vindo ao nosso programa!");
}

mensagemBemVindo();

function calcularMedia(a, b) {
    return (a + b) / 2;
}
resultado = calcularMedia(4, 6);
console.log(resultado);

/* Atividade 3*/
const prompt = require('prompt-sync')({sigint: true})
function saudacao(nome) {
    console.log(`Olá, ${nome}! Bem-vindo!`);
}
let nomeUsuario = prompt("Digite seu nome:");
saudacao(nomeUsuario);

/* Atividade 4 */
function gerarArray(n) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        array.push(i);
    }
    return array;
}
resultado = gerarArray(5);
console.log(resultado);

function contarAte(n) {
    let i = 0;
    while (i <= n) {
        console.log(i);
        i++;
    }
}
contarAte(5);

function nomeDiaSemana(dia) {
    let nome;
    switch (dia) {
        case 0:
            nome = "Domingo";
            break;
        case 1:
            nome = "Segunda-feira";
            break;
        case 2:
            nome = "Terça-feira";
            break;
        case 3:
            nome = "Quarta-feira";
            break;
        case 4:
            nome = "Quinta-feira";
            break;
        case 5:
            nome = "Sexta-feira";
            break;
        case 6:
            nome = "Sábado";
            break;
        default:
            nome = "Dia inválido";
    }
    return nome;
}
resultado = nomeDiaSemana(3);
console.log(resultado);

/* Atividade 5 */
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
resultado = parOuImpar(4);
console.log(resultado);

function verificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "zero";
    }
}
resultado = verificarNumero(-3);
console.log(resultado);

/* Atividade 6 */
function gerarArrayComExcecoes(n, excecoes) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        if (!excecoes.includes(i)) {
            array.push(i);
        }
    }
    return array;
}
resultado = gerarArrayComExcecoes(10, [2, 5, 7]);
console.log(resultado);