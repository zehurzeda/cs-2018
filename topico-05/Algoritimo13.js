const Validacao = require('../topico-06/Validacao');

/**
 * Raiz
 *
 * @param {number} n - representa o número a ser obtida a raiz
 * @param {number} i - Representa a precisão da raiz
 */
function raiz(n, i) {
  Validacao.validarNumeroInteiroMenorQueLimite(n, 1);
  Validacao.validarNumeroInteiroMenorQueLimite(i, 0);

  let r = 1;
  let index = i;
  while (index >= 0) {
    r = (r + n / r) / 2;
    index -= 1;
  }

  return r;
}

exports.raiz = raiz;
