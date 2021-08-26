import React, { useEffect, useState } from 'react';

import Base from 'templates/Base';
import PropostaTemplate from 'templates/Proposta';

import { useParams } from 'react-router-dom';
import { useProposta } from 'hooks/proposta';

import { PropostaData } from 'types/propostaTypes';

type PropostaParams = {
  id: string;
};

const Proposta: React.FC = () => {
  const { getPropostaById } = useProposta();
  const { id } = useParams<PropostaParams>();
  const [proposta, setProposta] = useState<PropostaData>({} as PropostaData);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPropostaById(id)
      .then(response => {
        setProposta(response);
      })
      .catch(() => {
        // TODO Podemos utilizar esse erro do backend para algo ?
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Base>
      <PropostaTemplate proposta={proposta} isLoading={loading} />
    </Base>
  );
};

export default Proposta;
