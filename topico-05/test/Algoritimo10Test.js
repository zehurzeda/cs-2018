const { expect } = require('chai');
const Operacao = require('../Algoritimo10');

describe('Algoritimo 10', () => {
  it('Deve retornar 1727.6666666666667 quando os parâmetros passados forem 10, 3', () => {
    expect(Operacao.logaritimoNatural(10, 3)).to.eql(1727.6666666666667);
  });
});

describe('Algoritimo 10', () => {
  it('Deve retornar erro quando o segundo parâmetro for menor que 2. Parâmetros passados 10, 1', () => {
    expect(() => {
      Operacao.logaritimoNatural(10, 1);
    }).to.throw(Error);
  });
});

describe('Algoritimo 10', () => {
  it("Deve retornar erro quando algum dos parâmetros forem inválidos. Parâmetros passados 'v', 2", () => {
    expect(() => {
      Operacao.logaritimoNatural('v', 2);
    }).to.throw(Error);
  });
});

describe('Algoritimo 10', () => {
  it("Deve retornar erro quando algum dos parâmetros forem inválidos. Parâmetros passados 2, 'v'", () => {
    expect(() => {
      Operacao.logaritimoNatural(2, 'v');
    }).to.throw(Error);
  });
});
