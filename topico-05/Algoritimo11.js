const Validacao = require('../topico-06/Validacao');

/**
 * Razão Áurea - Algorítimo para se obter a razão áurea entre x e y;
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} k 
 */
function razaoAurea(x, y, k) {
    Validacao.validarNumeroInteiroMenorQueLimite(x, 0, "Parâmetro 'x' inválido");
    Validacao.validarNumeroInteiroMenorQueLimite(y, x + 1, "Parâmetro 'y' inválido");
    Validacao.validarNumeroInteiroMenorQueLimite(k, 1, "Parâmetro 'k' inválido");

    let c = y;
    let a = x;

    for(let i = 1; i <= k; i++){
        let t = c;
        c = c + a;
        a = t;
    }

    return c/a;
}

exports.razaoAurea = razaoAurea;