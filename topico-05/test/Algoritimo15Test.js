const { expect } = require('chai');
const { crivoEratostenes } = require('../Algoritimo15');

describe('Algoritimo 15', () => {
  it('Verificar se 7 é primo passando como parâmetro um array de 10 posições e 10', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    crivoEratostenes(arr, 10);
    const resultado = arr[7] === 0;
    expect(resultado).to.eql(true);
  });
});

describe('Algoritimo 15', () => {
  it('Verificar se 15 é primo passando como parâmetro um array de 20 posições', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    crivoEratostenes(arr, 20);
    const resultado = arr[15] === 1;
    expect(resultado).to.eql(true);
  });
});

describe('Algoritimo 15', () => {
  it('Erro quando é passado o parâmetro posições diferente do real tamanho do array', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(() => {
      crivoEratostenes(arr, 11);
    }).to.throw(Error);
  });
});

describe('Algoritimo 15', () => {
  it('Erro quando é passado um array com tipos diferentes de number', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, '0'];
    expect(() => {
      crivoEratostenes(arr, 10);
    }).to.throw(Error);
  });
});
