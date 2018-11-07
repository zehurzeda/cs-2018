const Validacao = require('../topico-06/Validacao');

/**
 * Primo - Algorítimo para verificar se o número é primo ou não
 *
 * @param {numero} n - número para representar o número a ser verificado se é primo ou não
 */
function crivoEratostenes(a, n) {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (a[i] === 0) {
      let multiplo = i + i;
      while(multiplo <= n) {
        a[multiplo] = 1;
        multiplo += i;
      }
    }
  }
}

exports.crivoEratostenes = crivoEratostenes;
