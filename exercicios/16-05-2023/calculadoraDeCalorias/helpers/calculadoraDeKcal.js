const { cardapio } = require('../data/cardapio');
const { pedidos } = require('../data/pedidos');

const { transformadorDeNumero } = require('./transformadorDeNumero');

const calculadoraDeKcal = (pedido) => {
  // a funcao recebe um pedido, que é um array de objetos
  // ele verifica cada objeto e pega o equivalente de kcal no cardapio
  // nao esqueça de adicionar 1 fries e 1 soda medio pra cada combo
  // a funcao deve retornar um numero, que é o total de kcal do pedido
};


module.exports = { calculadoraDeKcal };
