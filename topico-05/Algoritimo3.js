const Validacao = require('./Validacao');

/**
 * Dia da semana - dado o dia, mes e ano retornar o dia da semana 
 * 
 * @param {number} d - número de 1 a 31 para representar o dia do mês
 * @param {number} m - número de 1 a 12 para representar o mês
 * @param {number} a - número maior que 1753 para representar o ano
 * @returns {number} - Retorna número de 0 a 6 que representa o dia da semana da data passada. 0 = Segunda, 1 = Terça ...
 */
function diaDaSemana(d, m, a) {
    Validacao.validaDia(d);
    Validacao.validaMes(m);
    Validacao.validaAno(a);

    if(m === 1 || m === 2) {
        m = m + 12;
        a = a - 1;
    }

    let s = d + 2*m + 3*(m+1)/5 + a + a/4 - a/100 + a/400;
    return parseInt(s%7);
}

exports.diaDaSemana = diaDaSemana;