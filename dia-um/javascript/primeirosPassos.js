// Dois tipos de variaveis
const variavelConstante = 'variavel constante'
let variavelVariavel = 'variavel variavel'

variavelVariavel = 'variavel alteravel'

// Printando coisas pra ver no console
// console.log(variavelVariavel)

// Declaracao de funcoes
function primeiroModo(argumentos){

}

const segundoModo = (argumentos) => {

}

// Declaracao de lista
const lista = [1, 2, 3, 4, 5]

// Declaracao de objeto
const objeto = {
    "pau": "no cu"
}

// console.log(lista[2])
// console.log(objeto["pau"])

// If Else
function testeLogico(valorUm, valorDois){
    let resultado;
    const conta = parseInt(valorUm) + parseInt(valorDois);
    //console.log(conta)

    if(conta > 5){
        resultado = "Maior que cinco"
    } else {
        resultado = "Menor que cinco";
    }

    return resultado;
}

const resultadoDoTeste = testeLogico(1, "3");

//console.log(resultadoDoTeste)

// Comparadores
// Comparador associativo
variavelVariavel = 1

// Comparador comparador
//console.log(variavelConstante == variavelVariavel)

// Compador estrito
const numeroDeVerdade = 1
const numeroFalso = 1
console.log(numeroDeVerdade === numeroFalso)

// Comparador de diferente
console.log(numeroDeVerdade !== numeroFalso)

// Tomar cuidado ao copiar arrays
const listaDois = lista
console.log(listaDois)

// As listas agora estao no mesmo endereco de memoria
console.log(listaDois === lista)
listaDois[0] = 6
console.log("Lista dois: ", listaDois);
console.log("Lista um", lista)

// Para copiar, usar reticencias antes
const listaCopiada = [...lista]
console.log("Lista copiada: ", listaCopiada)

// Alterando propriedades copiando todas as outras
// que nao sao as que voce quer alterar
const fantasmas = {
  ...fantasmas,
  banshee: {
    ...banshee,
    eliminado: true,
  },
};

// Operacoes aritmericas
const exponencial = 10 ** 2
const soma = 1 + 1
const subtracao = 2 - 1
const divisao = 10 / 2
const multiplicacao = 2 * 3
const resto = 5 % 2

console.log(resto)

// loops
for(let i = 0; i < 5; i++){
    console.log(i)
}