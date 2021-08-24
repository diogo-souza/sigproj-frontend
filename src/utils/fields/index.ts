import estados from 'utils/estados-cidades';

/* DONE */
export const tipoInstitucionalFields = [
  { value: 'Discente Graduacao', text: 'Discente graduação' },
  { value: 'Discente Pos-Graduacao', text: 'Discente pós-graduação' },
  { value: 'Docente', text: 'Docente' },
  { value: 'Tecnico Administrativo', text: 'Técnico administrativo' },
  { value: 'Outro', text: 'Outro' },
];

export const estadosFields = estados.map(({ value, text }) => {
  return { value, text };
});

export const cidadeFields = (currentState: string) => {
  return estados
    .find(({ value }) => currentState === value)
    ?.cidades.map(cidade => {
      return { value: cidade, text: cidade };
    });
};

export const centroFields = [
  {
    value: 'CAC - Centro de Artes e Comunicação',
    text: 'CAC - Centro de Artes e Comunicação',
  },
  { value: 'CB - Centro de Biociências', text: 'CB - Centro de Biociências' },
  {
    value: 'CCEN - Centro de Ciências Exatas e da Natureza',
    text: 'CCEN - Centro de Ciências Exatas e da Natureza',
  },
  {
    value: 'CCJ - Centro de Ciências Jurídicas',
    text: 'CCJ - Centro de Ciências Jurídicas',
  },
  {
    value: 'CCS - Centro de Ciências da Sáude',
    text: 'CCS - Centro de Ciências da Sáude',
  },
  {
    value: 'CCM - Centro de Ciências Médicas',
    text: 'CCM - Centro de Ciências Médicas',
  },
  {
    value: 'CCSA - Centro de Ciências Sociais Aplicadas',
    text: 'CCSA - Centro de Ciências Sociais Aplicadas',
  },
  { value: 'CE - Centro de Educação', text: 'CE - Centro de Educação' },
  {
    value: 'CFCH - Centro de Filosofia e Ciências Humanas',
    text: 'CFCH - Centro de Filosofia e Ciências Humanas',
  },
  { value: 'CIn - Centro de Informática', text: 'CIn - Centro de Informática' },
  {
    value: 'CTG - Centro de Tecnologia e Geociências',
    text: 'CTG - Centro de Tecnologia e Geociências',
  },
];

export const departamentoFields = [
  { value: 'Artes', text: 'Departamento de Artes' },
  { value: 'Informatica', text: 'Departamento de Informática' },
  { value: 'Letras', text: 'Departamento de Letras' },
  { value: 'Saude', text: 'Departamento de Saúde' },
  { value: 'Exatas', text: 'Departamento de Exatas' },
];

export const cargaTrabalhoFields = [
  { value: '20', text: '20 horas semanais' },
  { value: '30', text: '30 horas semanais' },
  { value: '40', text: '40 horas semanais' },
];

export const titulacaoFields = [
  { value: 'Ensino Medio', text: 'Ensino Médio' },
  { value: 'Graduando', text: 'Graduando' },
  { value: 'Graduado', text: 'Graduado' },
  { value: 'Especialista', text: 'Especialista' },
  { value: 'Mestre', text: 'Mestre' },
  { value: 'Doutor', text: 'Doutor' },
  { value: 'Outro', text: 'Outro' },
];

/* Falta confirmar o "PREFIRO NÃO INFORMAR" */
export const sexoFields = [
  { value: 'Masculino', text: 'Masculino' },
  { value: 'Feminino', text: 'Feminino' },
  { value: 'Prefiro não informar', text: 'Prefiro não informar' },
];

export const instituicaoFields = [
  { value: 'Universidade', text: 'Universidade Federal de Pernambuco - UFPE' },
];

export const categoriaFields = [{ value: 'categoria', text: 'Categoria 1' }];

export const modalidadeFields = [
  { value: 'Curso', text: 'Curso' },
  { value: 'Programa', text: 'Programa' },
  { value: 'Projeto', text: 'Projeto' },
  { value: 'Evento', text: 'Evento' },
];
