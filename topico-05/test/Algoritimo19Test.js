const { validarCpf } = require('../Algoritimo19');
const { expect } = require('chai');

describe('Algoritimo 19', function() {
  it('Verificar um cpf válido', function() {
    expect(validarCpf([6, 1, 4, 2, 7, 7, 4, 8, 0, 0, 4])).to.eql(true);
  });
});

describe('Algoritimo 19', function() {
  it('Verificar um cpf inválido', function() {
    expect(validarCpf([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2])).to.eql(false);
  });
});

describe('Algoritimo 19', function() {
  it('Erro ao passar um array com mais posições do que 11', function() {
    expect(() => {
      validarCpf([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 3]);
    }).to.throw(Error);
  });
});

describe('Algoritimo 19', function() {
  it('Erro ao passar um array com string', function() {
    expect(() => {
      validarCpf([6, 1, 4, 2, 7, 7, 4, 8, 0, 0, '4']);
    }).to.throw(Error);
  });
});
