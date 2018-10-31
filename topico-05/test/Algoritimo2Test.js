const operacao = require('../Algoritimo2');
const assert = require('assert');

describe('Algoritimo 2', function() {
    it('Deve retornar true quando c³ + d³ + u³ == n. Parâmetro passado 153', function() {
      assert.equal(operacao.calculo(153), true);
    });
});

describe('Algoritimo 2', function() {
  it('Deve retornar false quando c³ + d³ + u³ == n. Parâmetro passado 2', function() {
    assert.equal(operacao.calculo(2), false);
  });
});