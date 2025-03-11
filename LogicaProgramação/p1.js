/* Luís Victor Sousa Matias - 24114290192 */

const prompt = require ('prompt-sync')({sigint: true})
function verificarConsoante(caractere) {
    var regex = /^[a-zA-Z]$/;
    if (regex.test(caractere)) {
        var charLowerCase = caractere.toLowerCase();
        if (charLowerCase != 'a' && charLowerCase != 'e' && charLowerCase != 'i' && charLowerCase != 'o' && charLowerCase != 'u') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function verificarCaractere() {
    var caractere = prompt("Digite um caractere do alfabeto:");
    
    if (verificarConsoante(caractere)) {
        console.log("'" + caractere + "' é uma consoante.");
    } else {
        console.log("'" + caractere + "' não é uma consoante ou não é um caractere do alfabeto.");
    }
}

verificarCaractere();
