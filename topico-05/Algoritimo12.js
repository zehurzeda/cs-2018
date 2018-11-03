const Validacao = require('./Validacao');

/**
 * 
 * @param {number} n 
 */
function quadradoPerfeito(n){
    Validacao.validar(n, 1);

    let i = 1;
    let s = 1;

    while(s < n){
        i = i + 2;
        s = s + i;
    }

    return s === n;
}

exports.quadradoPerfeito = quadradoPerfeito;