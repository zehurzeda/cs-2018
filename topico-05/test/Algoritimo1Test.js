const operacao = require('../Algoritimo1');
const assert = require('assert');

describe('Algoritimo 1', function() {
    it('Deve retornar true quando (n/100 + n%100)² = n', function() {
      assert.equal(operacao.propriedade3025(3025), true);
    });
});

describe('Algoritimo 1', function() {
  it('Deve retornar false quando (n/100 + n%100)² != n', function() {
    assert.equal(operacao.propriedade3025(1234), false);
  });
});