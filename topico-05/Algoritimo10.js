const Validacao = require('../topico-06/Validacao');

/**
 * Logarítimo Natural
 * 
 * @param {number} n 
 * @param {number} k - precisão do logarítimo
 */
function logaritimoNatural(n, k) {
    Validacao.validarNumeroInteiroMenorQueLimite(n, 1);
    Validacao.validarNumeroInteiroMenorQueLimite(k, 2, "Parâmetro 'k' inválido!");

    e = 1 + n;
    numerador = n;
    denominador = 1;

    for(let i = 2; i <= k; i++){
        numerador = numerador * numerador;
        denominador = denominador * i;
        e = e + numerador / denominador;
    }

    return e;
}

exports.logaritimoNatural = logaritimoNatural;