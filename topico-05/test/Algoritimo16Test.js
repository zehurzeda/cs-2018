const { maiorDivisorComum, maiorDivisorComumSub } = require('../Algoritimo16');
const { expect } = require('chai');

describe('Algoritimo 16', function() {
  it('Verificar se o mmc entre 81 e 54 = 27', function() {
    expect(maiorDivisorComum(81, 54)).to.eql(27);
    expect(maiorDivisorComumSub(81, 54)).to.eql(27);
  });
});

describe('Algoritimo 16', function() {
  it('Verificar se o mmc entre 10 e 5 = 5', function() {
    expect(maiorDivisorComum(10, 5)).to.eql(5);
    expect(maiorDivisorComumSub(10, 5)).to.eql(5);
  });
});

describe('Algoritimo 16', function() {
  it('Erro se b > a', function() {
    expect(() => {
      maiorDivisorComum(5, 10);
    }).to.throw(Error);
    expect(() => {
      maiorDivisorComumSub(5, 10);
    }).to.throw(Error);
  });
});

describe('Algoritimo 16', function() {
  it('Erro se b = 0', function() {
    expect(() => {
      maiorDivisorComum(10, 0);
    }).to.throw(Error);
    expect(() => {
      maiorDivisorComumSub(10, 0);
    }).to.throw(Error);
  });
});
