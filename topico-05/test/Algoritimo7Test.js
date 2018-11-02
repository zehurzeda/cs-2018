const operacao = require("../Algoritimo7");
const expect = require("chai").expect;

console.log(operacao.produto(5, 10));

describe("Algoritimo 7", function() {
  it("Deve retornar 50 quando os parâmetros passados forem 5 * 10", function() {
    expect(operacao.produto(5, 10)).to.eql(50);
  });
});

describe("Algoritimo 7", function() {
  it("Deve retornar 60 quando os parâmetros passados forem 10 * 6", function() {
    expect(operacao.produto(10, 6)).to.eql(60);
  });
});

describe("Algoritimo 7", function() {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 'v', 10", function() {
    expect(() => {
      operacao.produto("v", 10);
    }).to.throw(Error);
  });
});

describe("Algoritimo 7", function() {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 10, 'v'", function() {
    expect(() => {
      operacao.produto(10, "v");
    }).to.throw(Error);
  });
});

describe("Algoritimo 7", function() {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados -10, 10", function() {
    expect(() => {
      operacao.produto(-10, 10);
    }).to.throw(Error);
  });
});

describe("Algoritimo 7", function() {
  it("Deve retornar erro quando um dos parâmetros for inválido. Parâmetros passados 10, -10", function() {
    expect(() => {
      operacao.produto(10, -10);
    }).to.throw(Error);
  });
});
