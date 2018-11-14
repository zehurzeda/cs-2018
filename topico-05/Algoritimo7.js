const Validacao = require('../topico-06/Validacao');

/**
 * Produto - função para retornar o resultado de a * b usando somas
 *
 * @param {number} a
 * @param {number} b
 */
function produto(a, b) {
    Validacao.validarNumeroInteiroMenorQueLimite(a, 0);
    Validacao.validarNumeroInteiroMenorQueLimite(b, 0);
    let totalParcela = a;
    let parcela = b;

  if (b < a) {
    totalParcela = b;
    parcela = a;
  }

  let s = 0;

  for (let i = 1; i <= totalParcela; i += 1) {
    s += parcela;
  }

  return s;
}

exports.produto = produto;
