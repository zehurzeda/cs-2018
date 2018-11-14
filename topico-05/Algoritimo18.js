const Validacao = require('../topico-06/Validacao');

/**
 * Fibonacci - Retorna o n-ésimo número de fibonacci
 *
 * @param {number} n
 */
function fibonacci(n) {
  Validacao.validarNumeroInteiroMenorQueLimite(n, 0);

  let a = 0;
  let c = 1;
  if (n === 0 || n === 1) {
    return n;
  }
  for (let i = 2; i <= n; i += 1) {
    const t = c;
    c += a;
    a = t;
  }
  return c;
}

exports.fibonacci = fibonacci;
