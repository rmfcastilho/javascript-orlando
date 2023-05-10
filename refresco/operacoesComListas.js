const lista = [1, 2, 3, 4, 5];

// acessando objetos na lista
const primeiroElemento = lista[0]

// vendo quantidade de elementos em uma lista
const quantidadeDeElementos = lista.length;

// iterador tradicional
for (let i = 0; i < lista.length; i++) {
    // console.log(lista[i])
}

// iterador convencional/atual -> sem retorno
lista.forEach((numero) => console.log(numero));

// iterador convencional/atual -> com retorno
const listaModificada = lista.map((numero) => numero + 2)
console.log(listaModificada)