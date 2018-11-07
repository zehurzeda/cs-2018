const { expect } = require('chai');
const operacao = require('../Algoritimo5');

describe('Algoritimo 5', () => {
  it('Deve retornar 210 quando o parâmetro passados for 20', () => {
    expect(operacao.somaNaturais(20)).to.eql(210);
  });
});

describe('Algoritimo 5', () => {
  it("Deve retornar erro quando o parâmetro for inválido. Parâmetro passado 'v'", () => {
    expect(() => {
      operacao.somaNaturais('v');
    }).to.throw(Error);
  });
});

describe('Algoritimo 5', () => {
  it('Deve retornar erro quando o parâmetro for < 1. Parâmetro passado 0', () => {
    expect(() => {
      operacao.somaNaturais(0);
    }).to.throw(Error);
  });
});
