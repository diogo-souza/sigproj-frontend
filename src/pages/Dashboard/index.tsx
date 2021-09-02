import React from 'react';

import Base from 'templates/Base';

import { Container } from 'components/Container';

import Heading from 'components/Heading';

const Dashboard: React.FC = () => {
  return (
    <Base>
      <Container>
        <Heading color="titleBlack">Dashboard</Heading>
      </Container>
    </Base>
  );
};

export default Dashboard;
