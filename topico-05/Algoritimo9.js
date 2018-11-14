const Validacao = require('../topico-06/Validacao');

/**
 * Pi - o cálculo de PI, quanto maior for n, maior a precisão do cálculo
 * 
 * @param {number} precisao - limíte para a quantidade de termos do somatório a serem considerados, quanto maior melhor a precisão.
 */
function pi(precisao) {
  Validacao.validarNumeroInteiroMenorQueLimite(precisao, 1, 'A precisão não pode ser menor que 1 ou negativa');
  s = -1;
  d = -1;
  p = 0;

  for (let i = 1; i <= precisao; i++) {
    d = d + 2;
    s = -1 * s;
    p = p + (4 * s) / d;
  }

  return p;
}

exports.pi = pi;
