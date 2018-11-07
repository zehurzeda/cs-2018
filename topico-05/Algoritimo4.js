const Validacao = require('../topico-06/Validacao');

/**
 * Resto da divisão inteira
 * 
 * @param {number} x - Número inteiro que representa o dividendo
 * @param {number} y - Número inteiro que representa o divisor
 * @returns {number} - O resto da divisão de x por y
 */
function mod(dividendo, divisor) {
  Validacao.validarNumeroInteiroMenorQueLimite(dividendo, 1, 'Dividendo inválido, não pode ser menor que 1!');
  Validacao.validarNumeroInteiroMenorQueLimite(divisor, 1, 'Divisor inválido, não pode ser zero ou negativo!');

  let s = dividendo;
  while (divisor <= s) {
    s = s - divisor;
  }
  return s;
}

exports.mod = mod;
