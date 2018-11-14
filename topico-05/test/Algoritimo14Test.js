const Operacao = require("../Algoritimo14");
const expect = require("chai").expect;

describe("Algoritimo 14", function() {
  it("3 é primo!", function() {
    expect(Operacao.primo(3)).to.eql(true);
  });
});

describe("Algoritimo 14", function() {
  it("7 é primo!", function() {
    expect(Operacao.primo(7)).to.eql(true);
  });
});

describe("Algoritimo 14", function() {
  it("9 não é primo!", function() {
    expect(Operacao.primo(9)).to.eql(false);
  });
});

describe("Algoritimo 14", function() {
  it("Deve retornar erro quando n for menor que 1", function() {
    expect(() => {
      Operacao.primo(1);
    }).to.throw(Error);
  });
});

describe("Algoritimo 14", function() {
  it("Deve retornar erro quando n for inválido", function() {
    expect(() => {
      Operacao.primo('v');
    }).to.throw(Error);
  });
});
