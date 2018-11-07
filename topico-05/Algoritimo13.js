const Validacao = require('./Validacao');

/**
 * Raiz
 *
 * @param {number} n
 * @param {number} i
 */
function raiz(n, i) {
  Validacao.validar(n, 1);
  Validacao.validar(i, 0);

  let r = 1;
  let index = i;
  while (index >= 0) {
    r = (r + n / r) / 2;
    index -= 1;
  }

  return r;
}

exports.raiz = raiz;
