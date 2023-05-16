const { geradorDeRelatorioDeAluno } = require('./helpers/relatorioDeAluno');
const { geradorDeRelatorioDeMateria } = require('./helpers/relatorioDeMateria');

const TIPOS_DE_RELATORIO = {
  RELATORIO_DE_ALUNO: 'relatorioDeAluno',
  RELATORIO_DE_MATERIA: 'relatorioDeMateria',
};

const geradorDeRelatorios = (tipoDeRelatorio, codigoDoAluno) => {
  if (tipoDeRelatorio === TIPOS_DE_RELATORIO.RELATORIO_DE_ALUNO) {
    return geradorDeRelatorioDeAluno(codigoDoAluno); 
  };

  return geradorDeRelatorioDeMateria();
};

module.exports = { geradorDeRelatorios };
