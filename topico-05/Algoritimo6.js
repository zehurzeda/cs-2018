const Validacao = require('../topico-06/Validacao');

/**
 * Fatorial
 *
 * @param {number} n - Número que se quer saber o fatorial
 * @returns {number} com o resultado de fatorial de n
 */
function fatorial(n) {
  Validacao.validarNumeroInteiroMenorQueLimite(n, 1, 'O parâmetro não pode ser menor que 1!');

  let i = 2;
  let f = 1;

  while (i <= n) {
    f *= i;
    i += 1;
  }

  return f;
}

exports.fatorial = fatorial;
