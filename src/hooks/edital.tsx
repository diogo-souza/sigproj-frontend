import React, { createContext, useCallback, useContext } from 'react';
import { EditalData, GetEditaisParams } from 'types/editalTypes';
import { PageInfoData } from 'types/globalTypes';
import { formatDate } from 'utils/formatters';

import api from '../services/api';

type GetEditaisResponse = {
  content: EditalData[];
  pageInfo: PageInfoData;
};

type EditalContextData = {
  getEditais(params: GetEditaisParams): Promise<GetEditaisResponse>;
  getEditalById(id: string): Promise<EditalData>;
};

const EditalContext = createContext<EditalContextData>({} as EditalContextData);

const EditalProvider: React.FC = ({ children }) => {
  const getEditais = useCallback(async (params: GetEditaisParams) => {
    try {
      const response = await api.get('editais', { params });

      const content = response.data.content.map((edital: EditalData) => ({
        ...edital,
        data_inicio: formatDate(edital.data_inicio),
        data_fim: formatDate(edital.data_fim),
      })) as EditalData[];

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

  const getEditalById = useCallback(async (id: string) => {
    try {
      const response = await api.get(`editais/${id}`);

      const edital = {
        ...response.data,
        data_inicio: formatDate(response.data.data_inicio),
        data_fim: formatDate(response.data.data_fim),
      } as EditalData;

      return edital;
    } catch (e) {
      throw new Error(e.response.data.titulo);
    }
  }, []);

  return (
    <EditalContext.Provider value={{ getEditais, getEditalById }}>
      {children}
    </EditalContext.Provider>
  );
};

function useEdital(): EditalContextData {
  const context = useContext(EditalContext);

  if (!context) {
    throw new Error('useEdital must be used within an EditalProvider');
  }

  return context;
}

export { EditalProvider, useEdital };
