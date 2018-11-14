const Validacao = require('../topico-06/Validacao');

/**
 * Primo - Algorítimo para verificar se o número é primo ou não
 *
 * @param {numero} n - número para representar o número a ser verificado se é primo ou não
 */
function primo(n) {
  Validacao.validarNumeroInteiroMenorQueLimite(n, 2);

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

exports.primo = primo;
