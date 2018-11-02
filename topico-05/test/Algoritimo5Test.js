const operacao = require("../Algoritimo5");
const expect = require("chai").expect;

describe("Algoritimo 5", function() {
  it("Deve retornar 210 quando o parâmetro passados for 20", function() {
    expect(operacao.somaNaturais(20)).to.eql(210);
  });
});

describe("Algoritimo 5", function() {
  it("Deve retornar erro quando o parâmetro for inválido. Parâmetro passado 'v'", function() {
    expect(() => {
      operacao.somaNaturais('v');
    }).to.throw(Error);
  });
});

describe("Algoritimo 5", function() {
  it("Deve retornar erro quando o parâmetro for < 1. Parâmetro passado 0", function() {
    expect(() => {
      operacao.somaNaturais(0);
    }).to.throw(Error);
  });
});
