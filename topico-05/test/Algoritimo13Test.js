const Operacao = require("../Algoritimo13");
const expect = require("chai").expect;

console.log(Operacao.raiz(3, 2));

describe("Algoritimo 13", function() {
  it("Raiz de 4 é igual a 2", function() {
    expect(Operacao.raiz(4, 10)).to.eql(2);
  });
});

describe("Algoritimo 13", function() {
  it("Raiz de 3, com precisão de 10 é igual a 1.7320508075688772", function() {
    expect(Operacao.raiz(3, 10)).to.eql(1.7320508075688772);
  });
});

describe("Algoritimo 13", function() {
  it("Raiz de 3, com precisão de 2 é igual a 1.7321428571428572", function() {
    expect(Operacao.raiz(3, 2)).to.eql(1.7321428571428572);
  });
});

describe("Algoritimo 13", function() {
  it("Deve retornar erro quando n for menor que 1", function() {
    expect(() => {
      Operacao.raiz(0, 3);
    }).to.throw(Error);
  });
});

describe("Algoritimo 13", function() {
  it("Deve retornar erro quando n for inválido", function() {
    expect(() => {
      Operacao.raiz('v', 3);
    }).to.throw(Error);
  });
});

describe("Algoritimo 13", function() {
  it("Deve retornar erro quando i for inválido", function() {
    expect(() => {
      Operacao.raiz(3, 'v');
    }).to.throw(Error);
  });
});

describe("Algoritimo 13", function() {
  it("Deve retornar erro quando i for menor que 0", function() {
    expect(() => {
      Operacao.raiz(3, -1);
    }).to.throw(Error);
  });
});