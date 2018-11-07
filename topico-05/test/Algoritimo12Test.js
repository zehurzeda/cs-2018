const { expect } = require('chai');
const Operacao = require('../Algoritimo12');

describe('Algoritimo 12', () => {
  it('5 não é quadrado perfeito.', () => {
    expect(Operacao.quadradoPerfeito(5)).to.eql(false);
  });
});

describe('Algoritimo 12', () => {
  it('9 é um quadrado perfeito.', () => {
    expect(Operacao.quadradoPerfeito(9)).to.eql(true);
  });
});

describe('Algoritimo 12', () => {
  it('Deve retornar erro quando n for menor que 1', () => {
    expect(() => {
      Operacao.quadradoPerfeito(0);
    }).to.throw(Error);
  });
});

describe('Algoritimo 12', () => {
  it('Deve retornar erro quando n for inválido', () => {
    expect(() => {
      Operacao.quadradoPerfeito('v');
    }).to.throw(Error);
  });
});
