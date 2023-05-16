# Aplicação de Gestão de Notas

## Conceito

Aqui, faremos em Node.js um algoritmo pra avaliar grupos de estudantes de diversas disciplinas e cursos de uma universidade.

A estrutura do projeto está toda pronta, ficando faltando apenas as funções auxiliares que realmente fazem o código funcionar.

## O desafio
Dentro da pasta `data` temos diversos arquivos contendo as informações necessárias para executar a atividade. 

Nossa intenção é criar um algoritmo que possa gerar dois tipos de relatório: Um focado nas matérias, com o seguinte resultado:

```
Resumo - Taxa de Aprovação
Materia 1 - 90%
Materia 2 - 50%
Materia 3 - 75%

Detalhamento - Materia 1
Aluno A (nome e sobrenome) - Média final 7 - Aprovado
Aluno B (nome e sobrenome) - Média final 7,2 - Aprovado com recuperação
Aluno C (nome e sobrenome) - Média final 6 - Reprovado

Detalhamento - Materia 2
...

```

E outra focado no aluno, com o seguinte resultado:

```
Aluno (nome e sobrenome)
Curso: ABC0001
Situação: Aprovado no semestre

Detalhamento:
Materia A - Média 7
Matéria B - Média 9
Matéria C - Média 7.5
Matéria D - Média 8
Materia E - Média 7
```

Ou seja, a função em `index.js` pode retornar qualquer um dos dois relatórios.

## Os critérios de avaliação
Cada aluno tem de fazer 2 provas por semestre por matéria. Cada prova é avaliada e recebe uma nota de 0 a 10.

A primeira prova, P1, compõe 40% da nota final.

A segunda prova, P2, compõe 60% da nota final.

A média do aluno é, então, dada por

`MEDIA_P1_P2 = (NOTA_DA_P1 * 0.4) + (NOTA_DA_P2 * 0.6)`.

Caso a média seja igual ou maior a 7, o aluno está automaticamente aprovado na matéria. Caso a média seja menor ou igual a 4, o aluno está autoamticamente reprovado na matéria.

Caso o aluno tenha média acima de 4 ou abaixo de 7, ele deverá fazer uma prova substitutiva, `PS`, na qual deverá tirar pelo menos 50% para obter aprovação.

Caso exista uma nota de `PS` na estrutura de dado de um aluno, sua nota final será dada por

`MEDIA_FINAL = (MEDIA_P1_P2 * 0.5) + (NOTA_PS * 0.5)`

A estrutura de dados de cada aluno será a seguinte

```javascript
  {
    nome: 'Carl',
    sobrenome: 'Johnson',
    curso: ABC0001,
    materias: [
      {
        codigoDaMateria: MAT001,
        notaP1: 8,
        notaP2: 7
      },
      {
        codigoDaMateria: MAT002,
        notaP1: 4,
        notaP2: 8,
        notaPS: 5,
      },
    ]
  },
```

Note que cada objeto de matéria pode ou não ter uma nota de PS, lembre-se de fazer uma checagem da existência do item para evitar que a aplicação quebre!