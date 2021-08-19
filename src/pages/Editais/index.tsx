import React, { useEffect, useMemo, useState } from 'react';

import { useEdital } from 'hooks/edital';
import { useHistory, useLocation } from 'react-router-dom';

import Base from 'templates/Base';
import EditalList from 'components/EditalList';
import Pagination from 'components/Pagination';

import { Container } from 'components/Container';
import { EditalData } from 'types/editalTypes';
import { PageInfoData } from 'types/globalTypes';

const Editais: React.FC = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const { getEditais } = useEdital();

  const [editais, setEditais] = useState<EditalData[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfoData>();
  const [page, setPage] = useState(Number(searchParams.get('pagina')) || 1);

  useEffect(() => {
    getEditais({ pagina: Number(searchParams.get('pagina')) }).then(
      response => {
        setEditais(response.content);
        setPageInfo(response.pageInfo);
      },
    );
  }, [searchParams, getEditais]);

  useEffect(() => {
    push(`editais?pagina=${page}`);
  }, [page, push]);

  return (
    <Base>
      <Container>
        <h1>Editais</h1>
        <EditalList editais={editais} />
        <Pagination
          currentPage={page || 1}
          elementsPerPage={pageInfo?.elementsPerPage || 4}
          totalCountOfElements={pageInfo?.totalCountOfElements || 100}
          onPageChange={setPage}
          lastPage={pageInfo?.totalPages || 1}
        />
      </Container>
    </Base>
  );
};

export default Editais;
