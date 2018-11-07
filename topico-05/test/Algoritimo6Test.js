const { expect } = require('chai');
const operacao = require('../Algoritimo6');

describe('Algoritimo 6', () => {
  it('Deve retornar 120 quando o parâmetro passados for 5', () => {
    expect(operacao.fatorial(5)).to.eql(120);
  });
});

describe('Algoritimo 6', () => {
  it("Deve retornar erro quando o parâmetro for inválido. Parâmetro passado 'v'", () => {
    expect(() => {
      operacao.fatorial('v');
    }).to.throw(Error);
  });
});

describe('Algoritimo 6', () => {
  it('Deve retornar erro quando o parâmetro for < 1. Parâmetro passado 0', () => {
    expect(() => {
      operacao.fatorial(0);
    }).to.throw(Error);
  });
});
