/**
 * Propriedade 3025 - função retorna true se (n/100 + n%100)² = n
 *
 * @param {number} n - O número a ser verificado se possuí a propriedade 3025
 * @returns {boolean} - (n/100 + n%100)² = n
 */
function propriedade3025(n) {
  const i = parseInt(n / 100, 10);
  const j = n % 100;
  return (i + j) ** 2 === n;
}

exports.propriedade3025 = propriedade3025;
