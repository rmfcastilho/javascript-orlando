// 1. Assigna valor a uma variavel
const variavel = 'valor'; // atribuiria 'valor' a variavel

// Foi alocado em um slot de memoria, exemplo 0x00000C

// 2. Compara dois valores
variavel == 'valor'; // resultaria em true
// compare o que tem dentro de variavel com a string 'valor'

// 3. Compara dois valores no mesmo slot de memoria
variavel === 'valor'; // resultaria em true
// compare o que tem no slot 0x00000C com a string valor

const outraVariavel = 'valor';
// na pratica, estou colocando um valor repetido em outra variavel
// normalmente, isso seria associado em outro slot de memoria, como 0x00000F
// mas o JavaScript decide apontar outraVariavel e variavel pro mesmo slot pra nao duplicar a demanda de memoria

variavel === outraVariavel // resultaria em true
// essencialmente, compare o valor do slot 0x00000C com o slot 0x00000C

// ------------

// Comparacao com listas
const listaConstante = [1, 2, 3, 4, 5];
// por debaixo dos panos, uma lista significa
// que o 1 esta no slot 0x00000E, o 2 esta no slot 0x00000F, o 3 esta no 0x00000G... etc

let listaVariavel = listaConstante;

listaVariavel.pop();

// console.log(listaConstante) // retorna [ 1, 2, 3, 4 ]

// Para so copiar os valores e deixar em espacos de memoria diferentes, tem o spread operator
const outraListaConstante = ['a', 'b', 'c']
let outraListaVariavel = [...outraListaConstante];

outraListaVariavel.pop()

console.log('Lista constante', outraListaConstante);
console.log('Outra lista variavel', outraListaVariavel);