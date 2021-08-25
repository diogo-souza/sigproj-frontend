import React, { useEffect, useState } from 'react';

import Base from 'templates/Base';
import EditalTemplate from 'templates/Edital';

import { EditalData } from 'types/editalTypes';
import { useParams } from 'react-router-dom';
import { useEdital } from 'hooks/edital';

type EditalParams = {
  id: string;
};

const Edital: React.FC = () => {
  const { getEditalById } = useEdital();
  const { id } = useParams<EditalParams>();
  const [edital, setEdital] = useState<EditalData>({} as EditalData);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getEditalById(id)
      .then(response => {
        setEdital(response);
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
      <EditalTemplate edital={edital} isLoading={loading} />
    </Base>
  );
};

export default Edital;
