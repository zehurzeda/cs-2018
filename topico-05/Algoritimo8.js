const Produto = require('./Algoritimo7');
const Validacao = require('./Validacao');

/**
 * Potencia - função para retornar o resultado de x^y usando somas reutilizando a
 * função produto do algorítimo 6
 *
 * @param {number} x - número para representar a base da potência
 * @param {number} y - número para representar o Expoente da potência
 */
function potencia(x, y) {
  Validacao.validarParametros(x, y);

  let potenciaVar = 1;

  for (let i = 1; i <= y; i += 1) {
    potenciaVar = Produto.produto(potenciaVar, x);
  }

  return potenciaVar;
}

exports.potencia = potencia;
