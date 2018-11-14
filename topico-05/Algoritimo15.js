const Validacao = require('../topico-06/Validacao');

/**
 *  Crivo de Eratostenes - Recebe um vetor e um número para verificar quais posições do vetor tem o index primo ou não
 *
 * @param {[number]} vetorIndicativo - Vetor com {posicoes} posiçoes preenchidas inicalmente com 0 para retornar
 * @param {numero} posicoes - Indicador do tamanho do array
 */
function crivoEratostenes(vetorIndicativo, posicoes) {

  Validacao.validarTamanhoArray(vetorIndicativo, posicoes);

  for (let i = 2; i <= Math.sqrt(posicoes); i += 1) {

    if (vetorIndicativo[i] === 0) {
      let multiplo = i + i;
      while (multiplo <= posicoes) {
        vetorIndicativo[multiplo] = 1;
        multiplo += i;
      }
    }
  }
}

exports.crivoEratostenes = crivoEratostenes;
