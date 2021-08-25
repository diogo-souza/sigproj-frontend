import React, { useState, useEffect, useMemo } from 'react';

import { useEdital } from 'hooks/edital';
import { useLocation } from 'react-router-dom';

import EditaisTemplate from 'templates/Editais';

import { EditalData } from 'types/editalTypes';
import { PageInfoData } from 'types/globalTypes';

import { parseQueryToObject } from 'utils/filter';

const Editais: React.FC = () => {
  const { search: query } = useLocation();

  const searchParams = useMemo(() => parseQueryToObject(query), [query]);

  const { getEditais } = useEdital();
  const [editais, setEditais] = useState<EditalData[]>();
  const [pageInfo, setPageInfo] = useState<PageInfoData>();

  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(() =>
    searchParams.pagina ? searchParams.pagina : 1,
  );

  useEffect(() => {
    setIsLoading(true);
    getEditais(searchParams)
      .then(response => {
        setEditais(response.content);
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
    <EditaisTemplate
      page={Number(page)}
      editais={editais}
      pageInfo={pageInfo}
      isLoading={isLoading}
      onPageChange={setPage}
    />
  );
};
export default Editais;
