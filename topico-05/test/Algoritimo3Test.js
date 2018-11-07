const assert = require('assert');
const { expect } = require('chai');
const operacao = require('../Algoritimo3');

describe('Algoritimo 3', () => {
  it('Deve retornar 2 quando os parâmetros passados forem 31, 10, 2018', () => {
    assert.equal(operacao.diaDaSemana(31, 10, 2018), 2);
  });
});

describe('Algoritimo 3', () => {
  it('Deve retornar 1 quando os parâmetros passados forem 30, 1, 2018', () => {
    assert.equal(operacao.diaDaSemana(30, 1, 2018), 1);
  });
});

describe('Algoritimo 3', () => {
  it('Deve retornar 3 quando os parâmetros passados forem 1, 2, 2018', () => {
    assert.equal(operacao.diaDaSemana(1, 2, 2018), 3);
  });
});

describe('Algoritimo 3', () => {
  it('Deve retornar erro quando o dia for inválido. Parâmetros passados 50, 10, 2018', () => {
    expect(() => {
      operacao.diaDaSemana(50, 10, 2018);
    }).to.throw(Error);
  });
});

describe('Algoritimo 3', () => {
  it('Deve retornar erro quando o mes for inválido. Parâmetros passados 31, 15, 2018', () => {
    expect(() => {
      operacao.diaDaSemana(31, 15, 2018);
    }).to.throw(Error);
  });
});

describe('Algoritimo 3', () => {
  it('Deve retornar erro quando o ano for inválido. Parâmetros passados 31, 10, 1700', () => {
    expect(() => {
      operacao.diaDaSemana(31, 10, 1700);
    }).to.throw(Error);
  });
});
