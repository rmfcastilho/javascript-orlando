/*Desafios Master - Arquivos JSON:
Criar uma função que conte a quantidade de fantasmas que existem no Ghosts.json
Criar uma função que recebe o nome de um fantasma e retorna sua descrição
Criar uma função que valida se o fantasma existe. Se existir, retorna as evidencias pra ele. Senão, retorna "fantasma inexistente".*/


const fantasmas = require("../json/Ghosts.json");

function contarFantasmas() {
    let cont = 0
    for(let i in fantasmas){
        cont++
    }

    return cont
    }
    
console.log("Número de Fantasmas: " + contarFantasmas())


function descricaoFantasma(nome){
    return fantasmas[nome].description
}

console.log("Descrição: " + descricaoFantasma("yokai"))



function evidenciasFantasma(nome){
    if(fantasmas[nome]){
        return fantasmas[nome].evidence
    }
    else
    {
        return "Fantasma Inexistente"
    }
    
}

console.log(evidenciasFantasma("asd"))