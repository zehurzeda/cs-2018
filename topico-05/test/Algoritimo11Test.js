const Operacao = require("../Algoritimo11");
const expect = require("chai").expect;

describe("Algoritimo 11", function() {
  it("Deve retornar 1.618033988749895 quando os parâmetros passados forem x, y, 40. Parâmetros passados 20, 50, 40", function() {
    expect(Operacao.razaoAurea(20, 50, 40)).to.eql(1.618033988749895);
  });
});

describe("Algoritimo 11", function() {
  it("Deve retornar 1.618033988749895 quando os parâmetros passados forem x, y, 40. Parâmetros passados 1, 2, 40", function() {
    expect(Operacao.razaoAurea(1, 2, 40)).to.eql(1.618033988749895);
  });
});

describe("Algoritimo 11", function() {
  it("Deve retornar erro quando x for maior que y. Parâmetros passados 10, 1, 40", function() {
    expect(() => {
      Operacao.razaoAurea(10, 1, 40)
    }).to.throw(Error);
  });
});

describe("Algoritimo 11", function() {
  it("Deve retornar erro quando algum dos parâmetros forem inválidos. Parâmetros passados 'v', 2, 40", function() {
    expect(() => {
      Operacao.razaoAurea("v", 2, 40);
    }).to.throw(Error);
  });
});

describe("Algoritimo 11", function() {
  it("Deve retornar erro quando algum dos parâmetros forem inválidos. Parâmetros passados 2, 'v', 40", function() {
    expect(() => {
      Operacao.razaoAurea(2, 'v', 40);
    }).to.throw(Error);
  });
});

describe("Algoritimo 11", function() {
  it("Deve retornar erro quando algum dos parâmetros forem inválidos. Parâmetros passados 1, 2, 'v'", function() {
    expect(() => {
      Operacao.razaoAurea(1, 2, 'v');
    }).to.throw(Error);
  });
});