import React, { useState, useEffect, useMemo } from 'react';

import Base from 'templates/Base';
import { Container } from 'components/Container';

import { useHistory, useLocation } from 'react-router-dom';

import Pagination from 'components/Pagination';
import { useEdital } from 'hooks/edital';

type EditaisData = {
  uuid: string;
  titulo: string;
  ativo: boolean;
  data_inicio: string;
  data_fim: string;
  chamada: string;
  modalidades: string[];
};

type PageInfoData = {
  elementsPerPage: number;
  currentPage: number;
  totalPages: number;
  totalCountOfElements: number;
};

const Editais: React.FC = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const { getEditais } = useEdital();

  const [editais, setEditais] = useState<EditaisData[]>([]);
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
        <div>
          {editais.map(edital => (
            <div key={edital.uuid}>
              <p>
                <strong>Titulo: </strong>
                {edital.titulo}
              </p>
              <p>
                <strong>Chamada: </strong>
                {edital.chamada}
              </p>
              <p>
                <strong>Data Inicio: </strong>
                {edital.data_inicio}
              </p>
              <p>
                <strong>Data fim: </strong>
                {edital.data_fim}
              </p>
              <p>
                <strong>Modalidades: </strong>
                {edital.modalidades}
              </p>
            </div>
          ))}
        </div>
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
