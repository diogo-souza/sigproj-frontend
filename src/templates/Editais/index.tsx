/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import Base from 'templates/Base';

import { Container } from 'components/Container';

import FormEditalFilter, { Values } from 'components/FormEditalFilter';
import EditalList from 'components/EditalList';
import Pagination from 'components/Pagination';
import Empty from 'components/Empty';

import { EditalData } from 'types/editalTypes';
import { PageInfoData } from 'types/globalTypes';

import { parseObjectToQuery, parseQueryToObject } from 'utils/filter';

import * as S from './styles';

export type EditaisTemplateProps = {
  page: number;
  editais?: EditalData[];
  pageInfo?: PageInfoData;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
};

const EditaisTemplate: React.FC<EditaisTemplateProps> = ({
  page,
  editais = [],
  pageInfo = {
    currentPage: 1,
    elementsPerPage: 4,
    totalCountOfElements: 4,
    totalPages: 1,
  },
  isLoading,
  onPageChange,
}: EditaisTemplateProps) => {
  const { push } = useHistory();
  const { search: query } = useLocation();

  const handleFilter = (items: Values) => {
    push({
      pathname: 'editais',
      search: parseObjectToQuery({ ...items, pagina: 1 }),
    });
  };

  useEffect(() => {
    push({
      pathname: 'editais',
      search: parseObjectToQuery({
        ...parseQueryToObject(query),
        pagina: page,
      }),
    });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Base>
      <Container>
        <S.Main>
          <FormEditalFilter
            onFilter={handleFilter}
            initialValues={parseQueryToObject(query)}
          />
          <section>
            {/* TODO Colocar um componente mais bonito */}
            {isLoading ? (
              <p>Carregando...</p>
            ) : editais.length ? (
              <>
                <EditalList editais={editais} />

                <Pagination
                  currentPage={pageInfo.currentPage}
                  elementsPerPage={pageInfo.elementsPerPage}
                  totalCountOfElements={pageInfo.totalCountOfElements}
                  onPageChange={onPageChange}
                  lastPage={pageInfo.totalPages}
                />
              </>
            ) : (
              <Empty
                title="Sem editais"
                description="Não encontramos editais para esses filtros"
                hasLink
                path="/editais?pagina=1"
                text="Voltar para a listagem de editais"
              />
            )}
          </section>
        </S.Main>
      </Container>
    </Base>
  );
};
export default EditaisTemplate;
