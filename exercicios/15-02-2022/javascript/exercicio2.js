/*Exercício 2:
Dado esse array:
const arrayAleatorio = [2, 64, 21, 25, 82, 98, 12, 421, 135, 132, 839, 128, 139, 12489, 12478, 21479]
Crie uma função que conte quantos números pares existem*/


const arrayAleatorio = [2, 64, 21, 25, 82, 98, 12, 421, 135, 132, 839, 128, 139, 12489, 12478, 21479]

function contarPares(){
        let qtde = 0
        for(i=0; i<=arrayAleatorio.length; i++){
            qtde += !(arrayAleatorio[i] % 2) ? 0 : 1;
        }
        return qtde
}

console.log(contarPares())




