const { calculadoraDePeso } = require('../calculadoraDePeso');

describe('calculadoraDePeso', () => {
  it('returns a number', () => {
    const result = calculadoraDePeso(7000);

    expect(result).toEqual(expect.any(Number));
  });

  it('returns a number with a maximum of two decimal points', () => {
    const result = calculadoraDePeso(9573).toString();
    const decimals = result.split('.')[1].split('');

    expect(decimals.length).toEqual(2);
  });
  
  it('returns a factor of 7000', () => {
    expect(calculadoraDePeso(7000)).toEqual(1);
    expect(calculadoraDePeso(3500)).toEqual(0.5);
    expect(calculadoraDePeso(700)).toEqual(0.1);
  });
});
