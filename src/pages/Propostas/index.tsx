import React, { useState, useEffect, useMemo } from 'react';

import { useProposta } from 'hooks/proposta';
import { useLocation } from 'react-router-dom';

import PropostasTemplate from 'templates/Propostas';

import { PropostaData } from 'types/propostaTypes';
import { PageInfoData } from 'types/globalTypes';

import { parseQueryToObject } from 'utils/filter';

const Propostas: React.FC = () => {
  const { search: query } = useLocation();

  const searchParams = useMemo(() => parseQueryToObject(query), [query]);
  const { getPropostas } = useProposta();

  const [propostas, setPropostas] = useState<PropostaData[]>();
  const [pageInfo, setPageInfo] = useState<PageInfoData>();

  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(() =>
    searchParams.pagina ? searchParams.pagina : 1,
  );

  useEffect(() => {
    setIsLoading(true);
    getPropostas(searchParams)
      .then(response => {
        setPropostas(response.content);
        setPageInfo(response.pageInfo);
      })
      .catch(() => {
        // TODO Podemos utilizar esse erro do backend para algo ?
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <PropostasTemplate
      page={Number(page)}
      propostas={propostas}
      pageInfo={pageInfo}
      isLoading={isLoading}
      onPageChange={setPage}
    />
  );
};
export default Propostas;
