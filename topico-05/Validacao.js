/**
 *
 * @ignore
 * @param {number} n
 * @throws {Error} se o parâmetro não for do tipo {number} ou n < 1
 */
function validarParametro(n) {
  if (typeof n !== "number" || n < 1) {
    throw new Error("Parâmetro inválido!");
  }
}

/**
 * Verifica se os parâmetros são válidos
 *
 * @param {number} x
 * @param {number} y
 */
function validarParametros(x, y) {
  if (typeof x !== "number" || x < 0) {
    throw new Error("Parâmetro inválido!");
  }
  if (typeof y !== "number" || y < 0) {
    throw new Error("Parâmetro inválido!");
  }
}

/**
 *
 * @ignore
 * @param {number} x
 * @param {number} y
 * @throws {Error} se um dos dois parâmetros não for do tipo {number} ou y < 0 ou x < 0
 */
function validarParametrosDivisao(x, y) {
  if (typeof y !== "number" || y < 0) {
    throw new Error("Parâmetro 'y' inválido!");
  }
  if (typeof x !== "number" || x < 1) {
    throw new Error("Parâmetro 'x' inválido");
  }
}

/**
 * Verificação se o parâmetro dia é do tipo {number} e está entre 1 e 31
 * @ignore
 * @param {number} d - número que representa o dia
 * @throws Irá extourar um erro se o dia não atender as condições
 */
function validaDia(d) {
    if(typeof(d) !== "number" || d > 31 || d < 1){
        throw(new Error('Dia Inválido!'));
    }
}

/**
 * Verificação se o parâmetro mês é do tipo {number} e está entre 1 e 12
 * @ignore
 * @param {number} m - número que representa o mes
 * @throws Irá extourar um erro se o mes não atender as condições
 */
function validaMes(m) {
    if(typeof(m) !== "number" || m > 12 || m < 1){
        throw(new Error('Mês Inválido!'));
    }
}

/**
 * Verificação se o parâmetro ano é do tipo {number} e é maior que 1753
 * @ignore
 * @param {number} a - número que representa o ano
 * @throws Irá extourar um erro se o ano não atender as condições
 */
function validaAno(a) {
    if(typeof(a) !== "number" || a < 1753){
        throw(new Error('Ano Inválido!'));
    }
}

exports.validarParametro = validarParametro;
exports.validarParametros = validarParametros;
exports.validarParametrosDivisao = validarParametrosDivisao;
exports.validaDia = validaDia;
exports.validaMes = validaMes;
exports.validaAno = validaAno;