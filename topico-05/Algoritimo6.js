const Validacao = require('./Validacao');

/**
 * Fatorial
 *
 * @param {number} n - número para representar o número que se quer saber o fatorial
 * @returns {number} com o resultado de fatorial de n
 */
function fatorial(n) {
  Validacao.validarParametro(n);

  let i = 2;
  let f = 1;

  while (i <= n) {
    f = f * i;
    i = i + 1;
  }

  return f;
}

exports.fatorial = fatorial;
