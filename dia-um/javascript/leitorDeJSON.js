const objetoDeInteresse = require("../json/exemplo.json");

function filtroDeIdade(objetoJSON, idadeDesejada) {
  const resultado = objetoJSON.alunos.filter((aluno) => {
    return aluno.idade === idadeDesejada;
  });

  return resultado;
}

function impressoraDeNomes(objetoJSON) {
  objetoJSON.alunos.map((aluno) => {
    console.log("=====");
    console.log("Aluno: ", aluno.nome);
    console.log("Idade", aluno.idade);
  });
}

const resultadoDaFuncao = filtroDeIdade(objetoDeInteresse, 30);
//console.log(resultadoDaFuncao)

impressoraDeNomes(objetoDeInteresse);
