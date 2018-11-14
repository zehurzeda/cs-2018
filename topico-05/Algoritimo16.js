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
  while (b !== 0) {
    let m = a % b;
    a = b;
    b = m;
  }
  return a;
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
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

exports.maiorDivisorComum = maiorDivisorComum;
exports.maiorDivisorComumSub = maiorDivisorComumSub;

