/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import Base from 'templates/Base';

import { Container } from 'components/Container';
import FormPropostaFilter, { Values } from 'components/FormPropostaFilter';
import PropostaList from 'components/PropostaList';
import Pagination from 'components/Pagination';
import Empty from 'components/Empty';

import { PropostaData } from 'types/propostaTypes';
import { PageInfoData } from 'types/globalTypes';

import { parseObjectToQuery, parseQueryToObject } from 'utils/filter';

import * as S from './styles';

export type PropostasTemplateProps = {
  page: number;
  propostas?: PropostaData[];
  pageInfo?: PageInfoData;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
};

const PropostasTemplate: React.FC<PropostasTemplateProps> = ({
  page,
  propostas = [],
  pageInfo = {
    currentPage: 1,
    elementsPerPage: 4,
    totalCountOfElements: 4,
    totalPages: 1,
  },
  isLoading,
  onPageChange,
}: PropostasTemplateProps) => {
  const { push } = useHistory();
  const { search: query } = useLocation();

  const handleFilter = (items: Values) => {
    push({
      pathname: 'propostas',
      search: parseObjectToQuery({ ...items, pagina: 1 }),
    });
  };

  useEffect(() => {
    push({
      pathname: 'propostas',
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
          <FormPropostaFilter
            onFilter={handleFilter}
            initialValues={parseQueryToObject(query)}
          />
          <section>
            {isLoading ? (
              <p>Carregando...</p>
            ) : propostas.length ? (
              <>
                <PropostaList propostas={propostas} />

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
                title="Sem propostas"
                description="Não encontramos propostas para esses filtros"
                hasLink
                path="/propostas?pagina=1"
                text="Voltar para a listagem de propostas"
              />
            )}
          </section>
        </S.Main>
      </Container>
    </Base>
  );
};
export default PropostasTemplate;
