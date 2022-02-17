/*Exercício 1:
Criar uma função que recebe um número
Se esse número for divisível por 3 (sem resto), retornar a palavra "foo"
Se esse número for divisível por 5 (sem resto), retornar a palavra "bar"
Se for divisível por 3 e por 5 (sem resto), retornar a palavra "foobar"*/



function foobar(numeroEntrada){
    numeroEntrada = parseInt(numeroEntrada)
    let mensagem = ""
    if(!(numeroEntrada % 3)){
            mensagem = "foo"
    }
    if(!(numeroEntrada % 5))
    {
            mensagem += "bar"
    }
    
    return mensagem
}

console.log(foobar(3))

/* outra maneira
function foobar(numeroEntrada){
    numeroEntrada = parseInt(numeroEntrada)
    let mensagem = ""
    
    mensagem = !(numeroEntrada % 3) ? "foo" : mensagem;
    mensagem = !(numeroEntrada % 5) ? mensagem + "bar" : mensagem;

    return mensagem
}

*/