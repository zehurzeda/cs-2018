const Operacao = require("../Algoritimo12");
const expect = require("chai").expect;

describe("Algoritimo 12", function() {
  it("5 não é quadrado perfeito.", function() {
    expect(Operacao.quadradoPerfeito(5)).to.eql(false);
  });
});

describe("Algoritimo 12", function() {
  it("9 é um quadrado perfeito.", function() {
    expect(Operacao.quadradoPerfeito(9)).to.eql(true);
  });
});

describe("Algoritimo 12", function() {
  it("Deve retornar erro quando n for menor que 1", function() {
    expect(() => {
      Operacao.quadradoPerfeito(0)
    }).to.throw(Error);
  });
});

describe("Algoritimo 12", function() {
  it("Deve retornar erro quando n for inválido", function() {
    expect(() => {
      Operacao.quadradoPerfeito('v')
    }).to.throw(Error);
  });
});