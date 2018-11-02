const operacao = require("../Algoritimo6");
const expect = require("chai").expect;

describe("Algoritimo 6", function() {
  it("Deve retornar 120 quando o parâmetro passados for 5", function() {
    expect(operacao.fatorial(5)).to.eql(120);
  });
});

describe("Algoritimo 6", function() {
  it("Deve retornar erro quando o parâmetro for inválido. Parâmetro passado 'v'", function() {
    expect(() => {
      operacao.fatorial('v');
    }).to.throw(Error);
  });
});

describe("Algoritimo 6", function() {
  it("Deve retornar erro quando o parâmetro for < 1. Parâmetro passado 0", function() {
    expect(() => {
      operacao.fatorial(0);
    }).to.throw(Error);
  });
});
