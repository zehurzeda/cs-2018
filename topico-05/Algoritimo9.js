const Validacao = require('./Validacao');

/**
 * Pi - o cálculo de PI, quanto maior for n, maior a precisão do cálculo
 *
 * @param {number} n - limíte para a quantidade de termos do somatório a serem considerados,
 * quanto maior for 'n' maior a precisão.
 */
function pi(n) {
  Validacao.validarParametro(n);
  let s = -1;
  let d = -1;
  let p = 0;

  for (let i = 1; i <= n; i += 1) {
    d += 2;
    s *= -1;
    p += (4 * s) / d;
  }

  return p;
}

exports.pi = pi;
