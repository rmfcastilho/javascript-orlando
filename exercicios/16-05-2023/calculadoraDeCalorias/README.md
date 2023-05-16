# Calculadora de Calorias

4 amigos (CJ, Smoke, Sweet, e Ryder), vão ao drive-thru do restaurante Cluckin' Bell.

Eles querem saber quantas calorias vão consumir, e quanto peso extra eles podem ganhar com o pedido.

## O algoritmo

O resultado final esperado é um código que escreva um relatório como:

```
CJ consumiu 700 calorias e deve ganhar 0,1kg
Ryder consumiu 650 calorias e deve ganhar...
```

## Premissas

### Da fonte de dados

Na pasta `data`, temos os itens do cardápio do Cluckin' Bell. O cardápio é um objeto, e a identificação do item é a própria chave.

```javascript
const cardapio = {
  9: {
      small: '800kcal',
      medium: '1000kcal',
      large: '1200kcal',
    },
},
```

Então se Big Smoke pedir um `number 9 large`, isso significa que o algoritmo precisa adicionar o número `1200` à soma total das calorias do pedido. Para isso, você precisará transformar a string em um número.

Caso um amigo peça apenas um `number 9`, isso significa que ele estará pedindo a versão `medium` daquele item.

Cada item é um combo, e as calorias nele se referem apenas ao sanduíche. Para cada combo, também deve ser acrescentado `1x medium soda` e `1x medium fries`.

Os pedidos dos amigos está em `data/pedidos.js`.

### Da conversão calorias -> peso
Cada 7.000kcal equivalem a um ganho de 1kg de peso.

## Fluxo da Aplicação

O `index.js` é o maestro do código. Ele deve chamar as funções auxiliares, passando os parâmetros corretos para ter os retornos e devolver o resultado.

## Arquivos a alterar

Somente as áreas demarcadas do `index.js` e todos os arquivos que não tenham `test` no nome da pasta `helpers`.

## Dicas

Pesquise a respeito dos métodos `parseInt()` e `replace()`.