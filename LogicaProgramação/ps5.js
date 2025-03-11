// Função para calcular a média aritmética de um array de números reais
function calcularMedia(array) {
    if (array.length === 0) return 0;
    
    const soma = array.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma / array.length;
}

const numeros = [10, 20, 30, 40, 50];
console.log("Média dos números:", calcularMedia(numeros));

// Função para multiplicar um escalar por um vetor (array)
function multiplicarEscalarVetor(escalar, vetor) {
    return vetor.map(elemento => escalar * elemento);
}

const vetor = [1, 2, 3, 4, 5];
console.log("Vetor multiplicado por 2:", multiplicarEscalarVetor(2, vetor));

// Função para calcular a soma dos termos de uma Progressão Aritmética finita
function somaProgressaoAritmetica(primeiroTermo, ultimoTermo, numeroTermos) {
    return ((primeiroTermo + ultimoTermo) * numeroTermos) / 2;
}

console.log("Soma da PA:", somaProgressaoAritmetica(1, 10, 10));

// Função para calcular a soma dos termos de uma Progressão Geométrica finita
function somaProgressaoGeometrica(primeiroTermo, razao, numeroTermos) {
    if (razao === 1) return primeiroTermo * numeroTermos;
    return primeiroTermo * (1 - Math.pow(razao, numeroTermos)) / (1 - razao);
}

console.log("Soma da PG:", somaProgressaoGeometrica(2, 2, 5));

// Função para calcular o salário final com base na categoria e no salário inicial
function calcularSalarioFinal(categoria, salarioInicial) {
    let aumento;
    switch (categoria) {
        case 'A':
            aumento = 0.10;
            break;
        case 'B':
            aumento = 0.15;
            break;
        case 'C':
            aumento = 0.20;
            break;
        default:
            return "Categoria inválida";
    }
    const salarioFinal = salarioInicial * (1 + aumento);
    return salarioFinal;
}

const categoria = 'B';
const salarioInicial = 2000;
console.log("Salário final:", calcularSalarioFinal(categoria, salarioInicial));
