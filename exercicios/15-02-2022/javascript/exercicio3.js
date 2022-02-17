/*Exercício 3 - HARD MODE:
Crie uma função que toma como argumento uma palavra.

Se essa palavra for um palíndromo (dá pra ler de frente pra trás e trás pra frente da mesma forma, tipo RADAR), retornar TRUE. Senão, retornar FALSE.*/


function palindromo(palavra){
    const arrayPalavra = Array.from(palavra);
    const qtdeCaract = arrayPalavra.length
    let contadorComparativo = qtdeCaract - 1
    for(i=0; i<=qtdeCaract;i++){
        if(arrayPalavra[i]!= arrayPalavra[contadorComparativo]){
            return false
            break
        }
        contadorComparativo--

    }
    return true
}

console.log(palindromo("radar"))