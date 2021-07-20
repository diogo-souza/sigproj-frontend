import {
  sexoFields,
  tipoInstitucionalFields,
  estadosFields,
  cidadeFields,
  cargaTrabalhoFields,
  categoriaFields,
  centroFields,
  departamentoFields,
  instituicaoFields,
  titulacaoFields,
} from '.';

describe('fields', () => {
  it('sexoFields', () => {
    expect(sexoFields).toMatchSnapshot();
  });
  it('tipoInstitucionalFields()', () => {
    expect(tipoInstitucionalFields).toMatchSnapshot();
  });
  it('estadosFields', () => {
    expect(estadosFields).toMatchSnapshot();
  });
  it('cidadeFields', () => {
    expect(cidadeFields('PE')).toMatchSnapshot();
  });
  it('cargaTrabalhoFields', () => {
    expect(cargaTrabalhoFields).toMatchSnapshot();
  });
  it('categoriaFields', () => {
    expect(categoriaFields).toMatchSnapshot();
  });
  it('centroFields', () => {
    expect(centroFields).toMatchSnapshot();
  });
  it('departamentoFields', () => {
    expect(departamentoFields).toMatchSnapshot();
  });
  it('instituicaoFields', () => {
    expect(instituicaoFields).toMatchSnapshot();
  });
  it('titulacaoFields', () => {
    expect(titulacaoFields).toMatchSnapshot();
  });
});
