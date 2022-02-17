/*Desafio Ultra Master Blaster:
Criar uma função que recebe o nome do fantasma, valida se ele existe. Se existir, retornar o LABEL de cada evidencia (que está em Evidence.json)*/
const fantasmas = require("../json/Ghosts.json");
const evidencias = require("../json/Evidence.json");

function evidenciasFantasma(nome){
    if(fantasmas[nome]){
        const arrayEvidencias = fantasmas[nome].evidence
        let evidenciasLabel = ""
        for(let i in arrayEvidencias){
            if(arrayEvidencias[i] == "orb")
            {
                evidenciasLabel += evidencias["orbs"].label + "\n"
            }
            else if(arrayEvidencias[i] == "temps")
            {
                evidenciasLabel += evidencias["freezing"].label + "\n"
            }
            else
            {
                evidenciasLabel += evidencias[arrayEvidencias[i]].label + "\n"
            }
        }
        return evidenciasLabel
    }
    else
    {
        return false
    }
    
}

console.log(evidenciasFantasma("demon"))