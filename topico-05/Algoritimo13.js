const Validacao = require('./Validacao');

/**
 * Raiz
 * 
 * @param {number} n 
 * @param {number} i 
 */
function raiz(n, i){
    Validacao.validar(n, 1);
    Validacao.validar(i, 0);

    r = 1;
    while(0 <= i){
        r = (r + n/r) / 2;
        i--;
    }

    return r
}

exports.raiz = raiz;