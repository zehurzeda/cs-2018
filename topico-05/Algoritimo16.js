const Validacao = require('../topico-06/Validacao');

/**
 * Maior divisor comum - Função que retorna o maior divisor comum entre a e b;
 *
 * @param {number} a
 * @param {number} b
 */
function maiorDivisorComum(a, b) {
  Validacao.validarNumeroInteiroMenorQueLimite(a, b);
  Validacao.validarNumeroInteiroMenorQueLimite(b, 1);

  let aVar = a;
  let bVar = b;

  while (bVar !== 0) {
    const m = aVar % bVar;
    aVar = b;
    bVar = m;
  }
  return aVar;
}

/**
 * Maior divisor comum utilizando subtrações - Função que retorna o maior divisor comum entre a e b
 * sem o uso do operador '%', realizando o cálculo somente com subtraçoes
 *
 * @param {number} a
 * @param {number} b
 */
function maiorDivisorComumSub(a, b) {
  Validacao.validarNumeroInteiroMenorQueLimite(a, b);
  Validacao.validarNumeroInteiroMenorQueLimite(b, 1);

  let aVar = a;
  let bVar = b;

  while (aVar !== bVar) {
    if (aVar > bVar) {
      aVar -= bVar;
    } else {
      bVar -= aVar;
    }
  }
  return aVar;
}

exports.maiorDivisorComum = maiorDivisorComum;
exports.maiorDivisorComumSub = maiorDivisorComumSub;
