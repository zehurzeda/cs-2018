const { expect } = require('chai');
const operacao = require('../Algoritimo4');

describe('Algoritimo 4', () => {
  it('Deve retornar 2 quando os parâmetros passados forem 5, 3', () => {
    expect(operacao.mod(5, 3)).to.eql(2);
  });
});

describe('Algoritimo 4', () => {
  it("Deve retornar erro quando o primeiro parâmetro for inválido. Parâmetros passados 'b', 3", () => {
    expect(() => {
      operacao.mod('b', 3);
    }).to.throw(Error);
  });
});

describe('Algoritimo 4', () => {
  it('Deve retornar erro quando o primeiro parâmetro for negativo. Parâmetros passados -10, 3', () => {
    expect(() => {
      operacao.mod(-10, 3);
    }).to.throw(Error);
  });
});

describe('Algoritimo 4', () => {
  it('Deve retornar erro quando o segundo parâmetro for negativo. Parâmetros passados 5, -3', () => {
    expect(() => {
      operacao.mod(5, 'a');
    }).to.throw(Error);
  });
});
