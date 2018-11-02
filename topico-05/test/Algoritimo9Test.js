const operacao = require("../Algoritimo9");
const expect = require("chai").expect;

describe("Algoritimo 9", function() {
  it("Deve retornar 3.466666666666667 quando o parâmetro passados for 3", function() {
    expect(operacao.pi(3)).to.eql(3.466666666666667);
  });
});

describe("Algoritimo 9", function() {
  it("Deve retornar erro quando o parâmetro for inválido. Parâmetro passado 'v'", function() {
    expect(() => {
      operacao.pi('v');
    }).to.throw(Error);
  });
});

describe("Algoritimo 9", function() {
  it("Deve retornar erro quando o parâmetro for < 1. Parâmetro passado 0", function() {
    expect(() => {
      operacao.pi(0);
    }).to.throw(Error);
  });
});
