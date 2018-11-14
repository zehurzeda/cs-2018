const { expect } = require('chai');
const { maiorDivisorComum, maiorDivisorComumSub } = require('../Algoritimo16');

describe('Algoritimo 16', () => {
  it('Verificar se o mmc entre 81 e 54 = 27', () => {
    expect(maiorDivisorComum(81, 54)).to.eql(27);
    expect(maiorDivisorComumSub(81, 54)).to.eql(27);
  });
});

describe('Algoritimo 16', () => {
  it('Verificar se o mmc entre 10 e 5 = 5', () => {
    expect(maiorDivisorComum(10, 5)).to.eql(5);
    expect(maiorDivisorComumSub(10, 5)).to.eql(5);
  });
});

describe('Algoritimo 16', () => {
  it('Erro se b > a', () => {
    expect(() => {
      maiorDivisorComum(5, 10);
    }).to.throw(Error);
    expect(() => {
      maiorDivisorComumSub(5, 10);
    }).to.throw(Error);
  });
});

describe('Algoritimo 16', () => {
  it('Erro se b = 0', () => {
    expect(() => {
      maiorDivisorComum(10, 0);
    }).to.throw(Error);
    expect(() => {
      maiorDivisorComumSub(10, 0);
    }).to.throw(Error);
  });
});
