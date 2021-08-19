import React, { useEffect, useState } from 'react';
import Base from 'templates/Base';
import EditalResume from 'components/EditalResume';
import { Container } from 'components/Container';
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

  useEffect(() => {
    getEditalById(id).then(response => {
      setEdital(response);
    });
  }, [id, getEditalById]);

  return (
    <Base>
      <Container>
        <h1>Edital</h1>
        <EditalResume edital={edital} />
      </Container>
    </Base>
  );
};

export default Edital;
