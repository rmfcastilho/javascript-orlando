const { calculadoraDeCalorias } = require('../index');

const EXPECTED_MESSAGES = {
  CJ: 'CJ consumiu 1070 calorias e deve ganhar 0.15kg',
  RYDER: 'Ryder consumiu 1070 calorias e deve ganhar 0.15kg',
  SWEET: 'Sweet consumiu 2200 calorias e deve ganhar 0.31kg',
  BIG_SMOKE: 'Big Smoke consumiu 9485 calorias e deve ganhar 1.35kg',
};

describe('calculadoraDeCalorias', () => {
  it('has the right message for CJ', () => {
    const message = calculadoraDeCalorias()[0];

    expect(message).toEqual(EXPECTED_MESSAGES.CJ);
  });

  it('has the right message for Ryder', () => {
    const message = calculadoraDeCalorias()[1];

    expect(message).toEqual(EXPECTED_MESSAGES.RYDER);
  });

  it('has the right message for Sweet', () => {
    const message = calculadoraDeCalorias()[2];

    expect(message).toEqual(EXPECTED_MESSAGES.SWEET);
  });

  it('has the right message for Big Smoke', () => {
    const message = calculadoraDeCalorias()[3];

    expect(message).toEqual(EXPECTED_MESSAGES.BIG_SMOKE);
  });
});
