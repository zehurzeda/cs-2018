const { expect } = require('chai');
const operacao = require('../Algoritimo8');

describe('Algoritimo 8', () => {
  it('Deve retornar 16 quando os parâmetros passados forem 4^2', () => {
    expect(operacao.potencia(4, 2)).to.eql(16);
  });
});

describe('Algoritimo 8', () => {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 'v', 10", () => {
    expect(() => {
      operacao.potencia('v', 10);
    }).to.throw(Error);
  });
});

describe('Algoritimo 8', () => {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 10, 'v'", () => {
    expect(() => {
      operacao.potencia(10, 'v');
    }).to.throw(Error);
  });
});

describe('Algoritimo 8', () => {
  it('Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados -10, 10', () => {
    expect(() => {
      operacao.potencia(-10, 10);
    }).to.throw(Error);
  });
});

describe('Algoritimo 8', () => {
  it('Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 10, -10', () => {
    expect(() => {
      operacao.potencia(10, -10);
    }).to.throw(Error);
  });
});
