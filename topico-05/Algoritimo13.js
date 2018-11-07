const Validacao = require('../topico-06/Validacao');

/**
 * Raiz
 * 
 * @param {number} n - representa o número a ser obtida a raiz
 * @param {number} i - Representa a precisão da raiz
 */
function raiz(n, i){
    Validacao.validarNumeroInteiroMenorQueLimite(n, 1);
    Validacao.validarNumeroInteiroMenorQueLimite(i, 0);

    r = 1;
    while(0 <= i){
        r = (r + n/r) / 2;
        i--;
    }

    return r
}

exports.raiz = raiz;