const Validacao = require('./Validacao');

/**
 * Soma os n primeiros números naturais
 * 
 * @param {number} n - número para representar a quantidade de números naturais a serem somados
 * @returns {number} com a soma dos n primeiros números naturais 
 */
function somaNaturais(n) {
  Validacao.validarParametro(n);

  let i = 2;
  let s = 1;

  while (i <= n) {
    s = s + i;
    i = i + 1;
  }

  return s;
}

exports.somaNaturais = somaNaturais;
