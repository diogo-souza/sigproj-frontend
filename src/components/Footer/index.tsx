import Heading from 'components/Heading';
import Logo from 'components/Logo';
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import * as S from './styles';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.Column aria-label="contato">
        <Heading color="titleWhite" size="small" lineBottom lineColor="primary">
          Proexc
        </Heading>
        <a href="mailto:contato@proexc.ufpe.br">
          <FaEnvelope />
          contato@proexc.ufpe.br
        </a>
        <a href="tel:+55 81 99999-9999">
          <FaPhone />
          +55 81 99999-9999
        </a>
        <a
          href="https://goo.gl/maps/mehG6hKBZBHVX223A"
          target="_blank"
          rel="noopenner, noreferrer"
        >
          <FaMapMarkerAlt />
          CIn - Centro de Informática - UFPE
        </a>
      </S.Column>

      <S.Column aria-label="contato">
        <Heading color="titleWhite" size="small" lineBottom lineColor="primary">
          STI
        </Heading>
        <a href="mailto:contato@sti.ufpe.br">
          <FaEnvelope /> contato@sti.ufpe.br
        </a>
        <a href="tel:+55 81 99999-9999">
          <FaPhone />
          +55 81 99999-9999
        </a>
        <a
          href="https://goo.gl/maps/mehG6hKBZBHVX223A"
          target="_blank"
          rel="noopenner, noreferrer"
        >
          <FaMapMarkerAlt />
          CIn - Centro de Informática - UFPE
        </a>
      </S.Column>

      <S.Column>
        <Logo />
      </S.Column>
    </S.Content>

    <S.Copyright>
      © {currentYear} STI Labs - Superintendência de Tecnologia da Informação -
      STI. Todos os direitos reservados.
    </S.Copyright>
  </S.Container>
);

export default Footer;
