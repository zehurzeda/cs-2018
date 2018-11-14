const Validacao = require('../topico-06/Validacao');

/**
 * Pi - o cálculo de PI, quanto maior for n, maior a precisão do cálculo
 *
 * @param {number} precisao - limíte para a quantidade de termos do somatório a
 * serem considerados, quanto maior melhor a precisão.
 */
function pi(precisao) {
  Validacao.validarNumeroInteiroMenorQueLimite(
    precisao,
    1,
    'A precisão não pode ser menor que 1 ou negativa',
  );
  let s = -1;
  let d = -1;
  let p = 0;

  for (let i = 1; i <= precisao; i += 1) {
    d += 2;
    s *= -1;
    p += (4 * s) / d;
  }

  return p;
}

exports.pi = pi;
