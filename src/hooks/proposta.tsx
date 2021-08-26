import React, { createContext, useCallback, useContext } from 'react';

import { PageInfoData } from 'types/globalTypes';

import { GetPropostasParams, PropostaData } from 'types/propostaTypes';

import api from '../services/api';

type GetPropostasResponse = {
  content: PropostaData[];
  pageInfo: PageInfoData;
};

type PropostaContextData = {
  getPropostas(params: GetPropostasParams): Promise<GetPropostasResponse>;
  getPropostaById(id: string): Promise<PropostaData>;
};

const PropostaContext = createContext<PropostaContextData>(
  {} as PropostaContextData,
);

const PropostaProvider: React.FC = ({ children }) => {
  const getPropostas = useCallback(async (params: GetPropostasParams) => {
    try {
      const response = await api.get('propostas/buscar', { params });

      const content = response.data.content as PropostaData[];

      const pageInfo = {
        currentPage: Number(response.data.pageable.pageNumber) + 1,
        elementsPerPage: Number(response.data.pageable.pageSize),
        totalPages: Number(response.data.totalPages),
        totalCountOfElements: Number(response.data.totalElements),
      } as PageInfoData;

      return { content, pageInfo };
    } catch (e) {
      throw new Error(e.response.data.titulo);
    }
  }, []);

  const getPropostaById = useCallback(async (id: string) => {
    try {
      const response = await api.get(`propostas/buscar/${id}`);

      const proposta = response.data as PropostaData;

      return proposta;
    } catch (e) {
      throw new Error(e.response.data.titulo);
    }
  }, []);

  return (
    <PropostaContext.Provider value={{ getPropostas, getPropostaById }}>
      {children}
    </PropostaContext.Provider>
  );
};

function useProposta(): PropostaContextData {
  const context = useContext(PropostaContext);

  if (!context) {
    throw new Error('useProposta must be used within an PropostaProvider');
  }

  return context;
}

export { PropostaProvider, useProposta };
