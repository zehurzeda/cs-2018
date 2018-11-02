const Validacao = require('./Validacao');

/**
 * Resto da divisão inteira
 * 
 * @param {number} x - Número inteiro que representa o dividendo
 * @param {number} y - Número inteiro que representa o divisor
 * @returns {number} - O resto da divisão de x por y
 */
function mod(x, y) {
  Validacao.validarParametrosDivisao(x, y);

  let s = x;
  while (y <= s) {
    s = s - y;
  }
  return s;
}

exports.mod = mod;
