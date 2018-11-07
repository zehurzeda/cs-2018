const { expect } = require('chai');
const operacao = require('../Algoritimo7');

describe('Algoritimo 7', () => {
  it('Deve retornar 50 quando os parâmetros passados forem 5 * 10', () => {
    expect(operacao.produto(5, 10)).to.eql(50);
  });
});

describe('Algoritimo 7', () => {
  it('Deve retornar 60 quando os parâmetros passados forem 10 * 6', () => {
    expect(operacao.produto(10, 6)).to.eql(60);
  });
});

describe('Algoritimo 7', () => {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 'v', 10", () => {
    expect(() => {
      operacao.produto('v', 10);
    }).to.throw(Error);
  });
});

describe('Algoritimo 7', () => {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 10, 'v'", () => {
    expect(() => {
      operacao.produto(10, 'v');
    }).to.throw(Error);
  });
});

describe('Algoritimo 7', () => {
  it('Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados -10, 10', () => {
    expect(() => {
      operacao.produto(-10, 10);
    }).to.throw(Error);
  });
});

describe('Algoritimo 7', () => {
  it('Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 10, -10', () => {
    expect(() => {
      operacao.produto(10, -10);
    }).to.throw(Error);
  });
});
