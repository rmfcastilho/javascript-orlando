const { transformadorDeNumero } = require('../transformadorDeNumero');

describe('transformadorDeNumero', () => {
  it('returns a number', () => {
    const result = transformadorDeNumero('1000kcal');
    expect(result).toEqual(expect.any(Number));
  });

  it(`removes 'kcal' from a string`, () => {
    const result = transformadorDeNumero('100kcal').toString();
    const containsKcal = result.includes('kcal');
    
    expect(containsKcal).toBe(false);
  });

  it('returns the expected value', () => {
    const result = transformadorDeNumero('420kcal');

    expect(result).toEqual(420);
  })
});
