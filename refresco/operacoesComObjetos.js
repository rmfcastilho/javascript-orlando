// Declaracao do objeto
const caracteristicasDoCJ = {
    nome: 'Carl',
    idade: 30,
    busta: true,
    armas: ['M4', 'MP5'],
    estomago: {
        tipoDeComida: 'cluckin bell'
    },
    stats: {
        stamina: 50,
        fat: 30,
        muscle: 100,   
    }
};

const idade = 'idade'

// Acessando itens do objeto
const nomeDoCarl = caracteristicasDoCJ.nome;
const idadeDoCarl = caracteristicasDoCJ[idade];

const alimentacaoDoCarl = caracteristicasDoCJ.estomago.tipoDeComida

// certificando de que o app nao vai quebrar caso a propriedade nao exista
const forcaDoCarl = caracteristicasDoCJ.stats?.muscle

// Spread operator com objetos
const caracteristicasDoBigSmoke = {
    ...caracteristicasDoCJ,
    nome: 'Big Smoke',
    idade: 40,
};

// desestruturação
const { nome, busta } = caracteristicasDoBigSmoke;

