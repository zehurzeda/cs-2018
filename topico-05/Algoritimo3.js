/**
 * Dia da semana - dado o dia, mes e ano retornar o dia da semana 
 * 
 * @param {number} d - número de 1 a 31 para representar o dia do mês
 * @param {number} m - número de 1 a 12 para representar o mês
 * @param {number} a - número maior que 1753 para representar o ano
 * @returns {number} - Retorna número de 0 a 6 que representa o dia da semana da data passada. 0 = Segunda, 1 = Terça ...
 */
function diaDaSemana(d, m, a) {
    verificaDia(d);
    verificaMes(m);
    verificaAno(a);

    if(m === 1 || m === 2) {
        m = m + 12;
        a = a - 1;
    }

    let s = d + 2*m + 3*(m+1)/5 + a + a/4 - a/100 + a/400;
    return parseInt(s%7);
}

/**
 * Verificação se o parâmetro dia é do tipo {number} e está entre 1 e 31
 * @ignore
 * @param {number} d - número que representa o dia
 * @throws Irá extourar um erro se o dia não atender as condições
 */
function verificaDia(d) {
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
function verificaMes(m) {
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
function verificaAno(a) {
    if(typeof(a) !== "number" || a < 1753){
        throw(new Error('Ano Inválido!'));
    }
}

exports.diaDaSemana = diaDaSemana;