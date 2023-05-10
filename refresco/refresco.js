// 1. Tipos de Variaveis
let variavelMutavel = 'oi';
const variavelNaoMutavel = "oi nao mutavel";

// 2. Tipos de dados
// --- Textuais: string
const textual = 'oi'

// -- Booleano: boolean
const bool = true;

// -- Numero: number
const numero = 666;

// -- Lista: array
const lista = ['tipo1', 1, false]

// -- Objeto: object
const caracteristicasDoCJ = {
    nome: 'Carl',
    idade: 30,
    busta: true,
    armas: ['M4', 'MP5'],
    estomago: {
        tipoDeComida: 'cluckin bell'
    }
};

// 3. Funcoes
// 3.1. Funcoes tradicionais
function callSomeoneAFool(nomeDoPersonagem = 'CJ') {
    console.log('You a fool, ' + nomeDoPersonagem)
};

callSomeoneAFool();

// 3.2. Funcoes arrow function
const arrowFunction = (nomeDoPersonagem) => {
    console.log('You a busta,', nomeDoPersonagem)
};

arrowFunction('CJ')

// 4. Classes
// Objeto
class Personagem {
    constructor(nome, vida = 100) {
        this.nome = nome;
        this.vida = vida
    }

    tomarDano(dano = 10) {
        this.vida = this.vida - dano
    }

    tomarSprunk() {
        this.vida += 15;
    }
};

// Instancias do objeto
const CJ = new Personagem('Carl Johnson', 100)
const bigSmoke = new Personagem('Big Smoke', 80)

// Operacao sobre a instancia do objeto
console.log(CJ.vida)
CJ.tomarDano();
console.log(CJ.vida)
CJ.tomarSprunk()
console.log(CJ.vida)

// Loop
for(let i = 0; i < 5; i++) {
    console.log(i)
}