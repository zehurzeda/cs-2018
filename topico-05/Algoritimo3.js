const Validacao = require('./Validacao');

/**
 * Dia da semana - dado o dia, mes e ano retornar o dia da semana
 *
 * @param {number} d - número de 1 a 31 para representar o dia do mês
 * @param {number} m - número de 1 a 12 para representar o mês
 * @param {number} a - número maior que 1753 para representar o ano
 * @returns {number} - Retorna número de 0 a 6 que representa o dia da
 * semana da data passada. 0 = Segunda, 1 = Terça ...
 */
function diaDaSemana(d, m, a) {
  Validacao.validaDia(d);
  Validacao.validaMes(m);
  Validacao.validaAno(a);

  const dia = d;
  let mes = m;
  let ano = a;

  if (mes === 1 || mes === 2) {
    mes += 12;
    ano -= 1;
  }

  const s = dia + 2 * mes + (3 * (mes + 1)) / 5 + ano + ano / 4 - ano / 100 + ano / 400;
  return parseInt(s % 7, 10);
}

exports.diaDaSemana = diaDaSemana;
