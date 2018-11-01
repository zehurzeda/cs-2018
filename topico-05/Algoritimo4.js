/**
 * Resto da divisão inteira
 * 
 * @param {number} x - Número inteiro que representa o dividendo
 * @param {number} y - Número inteiro que representa o divisor
 * @returns {number} - O resto da divisão de x por y
 */
function mod(x, y) {
  verificaParametros(x, y);

  let s = x;
  while (y <= s) {
    s = s - y;
  }
  return s;
}

/**
 * 
 * @ignore
 * @param {number} x 
 * @param {number} y
 * @throws {Error} se um dos dois parâmetros não for do tipo {number} ou y < 0 ou x < 0  
 */
function verificaParametros(x, y) {
  if (typeof y !== "number" || y < 0) {
    throw new Error("Parâmetro 'y' inválido!");
  }
  if (typeof x !== "number" || x < 1) {
    throw new Error("Parâmetro 'x' inválido");
  }
}

exports.mod = mod;
