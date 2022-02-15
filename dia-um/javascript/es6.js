// Atualizacao que trouxe declaracao de funcoes de forma diferente
// Se for unica linha de retorno, nao precisa de {}
// Senao, precisa

const somaUmMaisDois = () => 1 + 2
const fazMalabarisComNumeros = (numeroA, numeroB) => {
    let soma = numeroA + numeroB;
    soma += 5;

    return soma
}

const listaAleatoria = [1, 2, 3, 4, 5]

listaAleatoria.map((numero) => {
    console.log(numero + " mississipi")
})

const listaReduzida = listaAleatoria.filter((numero) => numero % 2 !== 0)

console.log(listaReduzida)