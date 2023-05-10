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

// truthy
// coisas que resultam em true, 1, ou qualquer preenchimento que nao seja falsy

// falsy
// coisas que resultam em false, 'undefined', 'null', 0

// isso
if (caracteristicasDoCJ.idade) {};

// e o oposto disso
if (!caracteristicasDoCJ.idade) {}

// e a mesma coisa que isso
if (caracteristicasDoCJ.idade === 30) {}

// Operador ternario
const isCJaBusta = caracteristicasDoCJ.busta
                        ? 'Busta!'
                        : 'Not a busta!';

// E a mesma coisa que
let cjIsABusta

if (caracteristicasDoCJ.busta) {
    cjIsABusta = 'Busta!'
} else {
    cjIsABusta = 'Not a busta!'
}