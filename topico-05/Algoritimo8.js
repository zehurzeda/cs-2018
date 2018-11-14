const Produto = require('./Algoritimo7');
const Validacao = require('../topico-06/Validacao');

/**
 * Potencia - função para retornar o resultado de x^y usando somas reutilizando a função produto do algorítimo 6
 * 
 * @param {number} base - Base da potência
 * @param {number} expoente - Expoente da potência
 */
function potencia(base, expoente) {
    Validacao.validarNumeroInteiroMenorQueLimite(base, 1, 'A base não deve ser menor que 1');
    Validacao.validarNumeroInteiroMenorQueLimite(expoente, 1, 'O expoênte não deve ser menor que 1');

  let potenciaVar = 1;

    for(let i = 1; i <= expoente; i++) {
        potencia = Produto.produto(potencia, base);
    }
    return potencia
}

exports.potencia = potencia;
