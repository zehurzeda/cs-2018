/**
 * Propriedade 153
 * 
 * @param {number} n - Número de expecifícamente 3 carácteres
 * @returns {boolean} - Retorna {boolean} se a soma dos cubos dos digitos de n = n
 */
function propriedade153(n) {
    let c = parseInt(n/100);
    let du = n%100;
    let d = parseInt(du/10);
    let u = du%10;

    return Math.pow(c, 3) + Math.pow(d, 3) + Math.pow(u, 3) === n;
}

exports.propriedade153 = propriedade153;