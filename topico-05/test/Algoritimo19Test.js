const { expect } = require('chai');
const { validarCpf } = require('../Algoritimo19');

describe('Algoritimo 19', () => {
  it('Verificar um cpf válido', () => {
    expect(validarCpf([6, 1, 4, 2, 7, 7, 4, 8, 0, 0, 4])).to.eql(true);
  });
});

describe('Algoritimo 19', () => {
  it('Verificar um cpf inválido', () => {
    expect(validarCpf([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2])).to.eql(false);
  });
});

describe('Algoritimo 19', () => {
  it('Erro ao passar um array com mais posições do que 11', () => {
    expect(() => {
      validarCpf([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 3]);
    }).to.throw(Error);
  });
});

describe('Algoritimo 19', () => {
  it('Erro ao passar um array com string', () => {
    expect(() => {
      validarCpf([6, 1, 4, 2, 7, 7, 4, 8, 0, 0, '4']);
    }).to.throw(Error);
  });
});
