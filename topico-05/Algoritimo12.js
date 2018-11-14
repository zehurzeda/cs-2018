const Validacao = require('../topico-06/Validacao');

/**
 *
 * @param {number} n
 */
function quadradoPerfeito(n) {
  Validacao.validarNumeroInteiroMenorQueLimite(n, 1);

  let i = 1;
  let s = 1;

  while (s < n) {
    i += 2;
    s += i;
  }

  return s === n;
}

exports.quadradoPerfeito = quadradoPerfeito;
