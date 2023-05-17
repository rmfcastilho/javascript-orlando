# Exercícios avançados

MA MAN,

Preparei esses exercícios que são bem mais complexos que os da primeira vez, mas faço isso porque notei sua facilidade em lembrar dos elementos, então resolvi deixar a coisa interessante para ficar mais na cara do tipo de coisa que lido cotidianamente em termos de lidar com fluxo de informações. Preciso mexer com métodos de objetos e arrays, então os dois exercícios são bem voltados pra isso.

Cada um é um módulo individual de Node.js - te explico o que é depois - mas essencialmente fiz isso pra a) termos testes automatizados pra validar se teu código está tendo o resultado esperado; e b) assim podemos dividir o código em diversos arquivos pequenos e não temos que ficar analisando um trambolho de 1000 linhas depois.

Cada exercício tem um README.md para indicar qual o contexto e o que precisa ser feito, mas fiz esse aqui porque existem métodos que vão ser úteis que não te passei da última vez que conversamos.

Comece pelo `calculadoraDeCalorias`, que é mais simples e funciona como um bom aquecimento.

## Métodos 

### Métodos de objeto

Como falamos da última vez, objetos são também chamados de `pares de chave: valor`, sendo `chave` a string que identifica o conteúdo, e `valor` o próprio conteúdo.

Então, olhando o seguinte objeto:

```javascript
const chevette = {
  ano: 1989,
  motor: 1.6,
  marca: 'chevrolet',
  transmissão: 'manual',
};
```

As chaves são `ano`, `motor`, `marca`, e `transmissão`, e os valores são `1989`, `1.6`, `chevrolet`, e `manual`.

Essa distinção é importante porque em JavaScript temos métodos para pegar justamente as chaves e os valores de um objeto pra poder trabalhar com eles. Objetos não são itens iteráveis (o ato de passar item por item pra avaliar o que tem dentro) como as listas são.

```javascript
const valores = [1989, 1.6, 'chevrolet', 'manual'];

const chevette = {
  ano: 1989,
  motor: 1.6,
  marca: 'chevrolet',
  transmissão: 'manual',
};

valores.forEach((valor) => console.log(valor)) // <- por estarmos lidando com uma lista, esse método vai passar item por item e escrever qual é o item no console

chevette.forEach((valor) => console.log(valor)) // <- vai quebrar a aplicação porque o método forEach não se aplica a objetos
```

Então temos que usar um macete: pegamos todas chaves ou todos os valores de um objeto, colocamos ele numa lista, e aí iteramos sobre essa lista:

```javascript
const chevette = {
  ano: 1989,
  motor: 1.6,
  marca: 'chevrolet',
  transmissão: 'manual',
};

const chaves = Object.keys(chevette) // ['ano', 'motor', 'marca', 'tranmissão'];
const valores = Object.values(chevette) // [1989, 1.6, 'chevrolet', 'manual'];

chaves.forEach((chave) => console.log(chevette[chave]));
```

E sabendo que `Object.keys()` e `Object.values()` criam arrays, podemos simplificar o método acima dessa maneira

```javascript
Object.keys(chevette).forEach((chave) => console.log(chevette[chave]))
```

### Outros métodos de array

Te passei uma colinha via WhatsApp esses dias a respeito dos métodos de array, e na última conversa te falei dos métodos `array.forEach` e `array.map`.

O que vai ser útil dessa vez vai ser o `array.filter`.

O `filter` retorna um novo array com elementos do array original que obedecem a uma regra específica. Exemplo

```javascript
const carros = [
  {
    nome: 'chevette',
    ano: 1989,
    motor: 1.6,
    marca: 'chevrolet',
    transmissão: 'manual',
  },
  {
    nome: 'corsa',
    ano: 1991,
    motor: 1.8,
    marca: 'chevrolet',
    transmissão: 'manual',
  },
  {
    nome: 'fiesta',
    ano: 1999,
    motor: 1.6,
    marca: 'chevrolet',
    transmissão: 'manual',
  },
];

const carrosDaChevrolet = carros.filter((modelo) => modelo.marca === 'chevrolet') // retornaria um array com os objetos do chevette e corsa

const carrosUmPontoSeis = carros.filter((modelo) => modelo.motor === 1.6) // retornaria um array com os objetos do chevette e fiesta
```

