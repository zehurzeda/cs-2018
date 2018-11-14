const Validacao = require('../topico-06/Validacao');

/**
 * Valida o cpf passado dentro de um array de {number}
 * 
 * @param {number[]} cpf - Array de 11 posições com os dígitos do cpf a ser validado
 */
function validarCpf(cpf) {
  Validacao.validarTamanhoArray(cpf, 11);
  Validacao.validarSeArrayPossuiSomenteNumeros(cpf);

  let j = cpf[0] + 2 * cpf[1] + 3 * cpf[2] + 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5] + 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
  let k = cpf[1] + 2 * cpf[2] + 3 * cpf[3] + 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6] + 7 * cpf[7] + 8 * cpf[8] + 9 * cpf[9];

  dj = (j % 11) % 10;
  dk = (k % 11) % 10;

  return dj === cpf[9] && dk === cpf[10];
}

exports.validarCpf = validarCpf;
