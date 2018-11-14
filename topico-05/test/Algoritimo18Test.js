const { expect } = require('chai');
const { fibonacci } = require('../Algoritimo18');

describe('Algoritimo 18', () => {
  it('Verificar se o 12º numéro de fibonacci é 144', () => {
    expect(fibonacci(12)).to.eql(144);
  });
});

describe('Algoritimo 18', () => {
  it('Verificar se o 1º numéro de fibonacci é 1', () => {
    expect(fibonacci(1)).to.eql(1);
  });
});

describe('Algoritimo 18', () => {
  it('Erro ao passar número negativo', () => {
    expect(() => {
      fibonacci(-10);
    }).to.throw(Error);
  });
});
