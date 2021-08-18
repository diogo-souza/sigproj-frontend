import React, { createContext, useCallback, useContext } from 'react';
import { EditaisData, GetEditaisParams } from 'types/editalTypes';
import { PageInfoData } from 'types/globalTypes';
import { formatDate } from 'utils/formatters';

import api from '../services/api';

type GetEditaisResponse = {
  content: EditaisData[];
  pageInfo: PageInfoData;
};

type EditalContextData = {
  getEditais(params: GetEditaisParams): Promise<GetEditaisResponse>;
};

const EditalContext = createContext<EditalContextData>({} as EditalContextData);

const EditalProvider: React.FC = ({ children }) => {
  const getEditais = useCallback(async (params: GetEditaisParams) => {
    const response = await api.get('editais', { params });

    const content = response.data.content.map((edital: EditaisData) => ({
      ...edital,
      data_inicio: formatDate(edital.data_inicio),
      data_fim: formatDate(edital.data_fim),
    })) as EditaisData[];

    const pageInfo = {
      currentPage: Number(response.data.pageable.pageNumber) + 1,
      elementsPerPage: Number(response.data.pageable.pageSize),
      totalPages: Number(response.data.totalPages),
      totalCountOfElements: Number(response.data.totalElements),
    } as PageInfoData;

    return { content, pageInfo };
  }, []);

  return (
    <EditalContext.Provider value={{ getEditais }}>
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
