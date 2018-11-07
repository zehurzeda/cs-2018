const assert = require('assert');
const operacao = require('../Algoritimo2');

describe('Algoritimo 2', () => {
  it('Deve retornar true quando c³ + d³ + u³ == n. Parâmetro passado 153', () => {
    assert.equal(operacao.propriedade153(153), true);
  });
});

describe('Algoritimo 2', () => {
  it('Deve retornar false quando c³ + d³ + u³ == n. Parâmetro passado 2', () => {
    assert.equal(operacao.propriedade153(2), false);
  });
});
