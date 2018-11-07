/**
 * Propriedade 153
 *
 * @param {number} n - Número de expecifícamente 3 carácteres
 * @returns {boolean} - Retorna {boolean} se a soma dos cubos dos digitos de n = n
 */
function propriedade153(n) {
  const c = parseInt(n / 100, 10);
  const du = n % 100;
  const d = parseInt(du / 10, 10);
  const u = du % 10;

  return (c ** 3) + (d ** 3) + (u ** 3) === n;
}

exports.propriedade153 = propriedade153;
