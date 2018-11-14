/**
 * Verificação se o valor do dia está entre 1 e 31
 *
 * @param {number} dia - número que representa o dia
 * @throws {Error} - Se o dia for < 0 ou > 31
 */
function validaDia(dia) {
  validarSeEhNumero(dia);
  validarNumeroInteiro(dia);
  if (dia > 31 || dia < 1) {
    throw new Error('Dia Inválido!');
  }
}

/**
 * Verificação se o valor do mês é do tipo está entre 1 e 12
 *
 * @param {number} mes - número que representa o mes
 * @throws {Error} Se o valor passado < 1 ou > 12
 */
function validaMes(mes) {
  validarSeEhNumero(mes);
  validarNumeroInteiro(mes);
  if (mes > 12 || mes < 1) {
    throw new Error('Mês Inválido!');
  }
}

/**
 * Verificação se o valor do ano é maior que 1753
 *
 * @param {number} ano - número que representa o ano
 * @throws {Error} Se o valor passado < 1753
 */
function validaAno(ano) {
  validarSeEhNumero(ano);
  validarNumeroInteiro(ano);

  if (ano < 1753) {
    throw new Error('Ano Inválido!');
  }
}

/**
 * Função que valida se o parâmetro passado é do tipo number
 *
 * @param {*} parametro - Parâmetro a ser validado se é do tipo 'number'
 * @throws {Error} - se {parametro} não for do tipo 'number'
 */
function validarSeEhNumero(parametro) {
  const tipo = typeof parametro;
  if (tipo !== 'number') {
    throw new Error('Se esperava um número, mas foi recebido ' + tipo);
  }
}

/**
 * Função que valida se o número é inteiro
 *
 * @param {number} numero - Número a ser validado se é inteiro
 * @throws {Error} - se {numero} não for inteiro
 */
function validarNumeroInteiro(numero) {
  validarSeEhNumero(numero);
  if (numero % 1 !== 0 && !isNaN(x % 1)) {
    throw new Error(
      'Se esperava um número inteiro, porém foi recebido número decimal'
    );
  }
}

/**
 * Função que valida se o número é menor que o valor limite
 *
 * @param {number} numero - Número a ser validado
 * @param {number} valorLimite - Valor limite de {numero}
 * @param {string} mensagemDeErro - A mensagem de erro que será retornada se numero < valorLimite
 * @throws {Error} - com a mensagemDeErro se o numero menor que o valor limite
 */
function validarNumeroInteiroMenorQueLimite(
  numero,
  valorLimite,
  mensagemDeErro = 'Parâmetro inválido!'
) {
  validarNumeroInteiro(numero);
  validarNumeroInteiro(valorLimite);

  if (numero < valorLimite) {
    throw new Error(mensagemDeErro);
  }
}

/**
 *
 * @param {[number]} array
 * @param {number} tamanho
 */
function validarTamanhoArray(array, tamanho) {
  validarNumeroInteiro(tamanho);
  validarArray(array);

  if (array.length !== tamanho) {
    throw new Error(`O tamanho do array é diferente de ${tamanho}`);
  }
}

/**
 * Verifica se o obj passado é array
 *
 * @param {*} obj - Objeto a ser verificado
 * @throws {Error} - Se o obj passado não for um array
 */
function validarArray(obj) {
  if (!Array.isArray(obj)) {
    throw new Error('Se esperava um array, mas foi recebido ' + typeof obj);
  }
}

/**
 * Verifica se há valores que não estão zerados no array
 *
 * @param {Array} arr - Array para ser validado
 */
function valoresArrayZerados(arr) {
  arr.forEach(element => {
    validarNumeroInteiro(element);
    if (element !== 0) {
      throw new Error('Há valores que não estão zerados no array');
    }
  });
}

function validarSeArrayPossuiSomenteNumeros(arr) {
  arr.forEach(element => {
    validarNumeroInteiro(element);
  });
}

exports.validaDia = validaDia;
exports.validaMes = validaMes;
exports.validaAno = validaAno;
exports.validarNumeroInteiroMenorQueLimite = validarNumeroInteiroMenorQueLimite;
exports.validarNumeroInteiro = validarNumeroInteiro;
exports.validarSeEhNumero = validarSeEhNumero;
exports.validarTamanhoArray = validarTamanhoArray;
exports.validarArray = validarArray;
exports.valoresArrayZerados = valoresArrayZerados;
exports.validarSeArrayPossuiSomenteNumeros = validarSeArrayPossuiSomenteNumeros;