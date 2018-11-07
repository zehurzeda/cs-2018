const assert = require('assert');
const operacao = require('../Algoritimo1');

describe('Algoritimo 1', () => {
  it('Deve retornar true quando (n/100 + n%100)² = n', () => {
    assert.equal(operacao.propriedade3025(3025), true);
  });
});

describe('Algoritimo 1', () => {
  it('Deve retornar false quando (n/100 + n%100)² != n', () => {
    assert.equal(operacao.propriedade3025(1234), false);
  });
});
