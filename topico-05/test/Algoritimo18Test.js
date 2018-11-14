const { fibonacci } = require('../Algoritimo18');
const { expect } = require('chai');

describe('Algoritimo 18', function() {
  it('Verificar se o 12º numéro de fibonacci é 144', function() {
    expect(fibonacci(12)).to.eql(144);
  });
});

describe('Algoritimo 18', function() {
  it('Verificar se o 1º numéro de fibonacci é 1', function() {
    expect(fibonacci(1)).to.eql(1);
  });
});

describe('Algoritimo 18', function() {
  it('Erro ao passar número negativo', function() {
    expect(() => {
      fibonacci(-10);
    }).to.throw(Error)
  });
});
