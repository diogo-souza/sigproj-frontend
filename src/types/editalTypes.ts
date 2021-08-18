export type GetEditaisParams = {
  titulo?: string;
  modalidade?: string;
  data_inicio?: string;
  data_fim?: string;
  pagina?: number;
  limite?: number;
};

export type EditaisData = {
  uuid: string;
  titulo: string;
  ativo: boolean;
  data_inicio: string;
  data_fim: string;
  chamada: string;
  modalidades: string[];
  corpo?: string;
};
