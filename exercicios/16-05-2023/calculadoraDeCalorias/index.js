const { cardapio } = require('./data/cardapio');
const { pedidos } = require('./data/pedidos');

const { calculadoraDePeso } = require('./helpers/calculadoraDePeso');
const { calculadoraDeKcal } = require('./helpers/calculadoraDeKcal');


const calculadoraDeCalorias = () => {
  let relatorioDeConsumo = [];

  // seu código aqui
  // relatorioDeConsumo precisa ser uma lista de strings
  // Do tipo ['CJ consumiu 700kcal e deve ganhar 0.1kg']
  
}

console.log(calculadoraDeCalorias())

module.exports = { calculadoraDeCalorias };
