const { calculadoraDeKcal } = require('../calculadoraDeKcal');
const { pedidos } = require('../../data/pedidos');


describe('calculadoraDeKcal', () => {
  it('returns the correct calories for CJ', () => {
    const result = calculadoraDeKcal(pedidos['CJ']);
    expect(result).toEqual(1070);
  });

  it('returns the correct calories for Ryder', () => {
    const result = calculadoraDeKcal(pedidos['CJ']);
    expect(result).toEqual(1070);
  });

  it('returns the correct calories for Sweet', () => {
    const result = calculadoraDeKcal(pedidos['Sweet']);
    expect(result).toEqual(2200);
  });

  it('returns the correct calories for Big Smoke', () => {
    const result = calculadoraDeKcal(pedidos['Big Smoke']);
    expect(result).toEqual(9485);
  });
});