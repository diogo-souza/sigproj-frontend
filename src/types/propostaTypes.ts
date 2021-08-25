export type GetPropostasParams = {
  titulo?: string;
  area_tematica?: string;
  centro?: string;
  departamento?: string;
  modalidade?: string;
  pagina?: number;
  limite?: number;
};

export type PropostaData = {
  uuid: string;
  titulo: string;
  edital_uuid: string;
  edital_titulo: string;
  modalidade: string;
  area_tematica: string;
  centro: string;
  departamento: string;
};
