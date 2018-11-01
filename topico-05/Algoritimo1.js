/**
 * Propriedade 3025 - função retorna true se (n/100 + n%100)² = n
 * 
 * @param {number} n - O número a ser verificado se possuí a propriedade 3025
 * @returns {boolean} - (n/100 + n%100)² = n
 */
function propriedade3025(n) {
    let i = parseInt(n/100);
    let j = n%100;
    return Math.pow((i + j), 2) === n;
}

exports.propriedade3025 = propriedade3025;