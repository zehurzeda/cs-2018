const { expect } = require('chai');
const Operacao = require('../Algoritimo14');

describe('Algoritimo 14', () => {
  it('3 é primo!', () => {
    expect(Operacao.primo(3)).to.eql(true);
  });
});

describe('Algoritimo 14', () => {
  it('7 é primo!', () => {
    expect(Operacao.primo(7)).to.eql(true);
  });
});

describe('Algoritimo 14', () => {
  it('9 não é primo!', () => {
    expect(Operacao.primo(9)).to.eql(false);
  });
});

describe('Algoritimo 14', () => {
  it('Deve retornar erro quando n for menor que 1', () => {
    expect(() => {
      Operacao.primo(1);
    }).to.throw(Error);
  });
});

describe('Algoritimo 14', () => {
  it('Deve retornar erro quando n for inválido', () => {
    expect(() => {
      Operacao.primo('v');
    }).to.throw(Error);
  });
});
