import React from 'react';
import Base from 'templates/Base';
import { Container } from 'components/Container';
import Heading from 'components/Heading';
import { Divider } from 'components/Divider';
import Button from 'components/Button';
import Accordion from 'components/Accordion';

import {
  FaSearch as SearchIcon,
  FaPen as PenIcon,
  FaUserCheck as UserCheckIcon,
} from 'react-icons/fa';
import heroImage from 'assets/images/registerHero.svg';
import { useHistory } from 'react-router-dom';
import questionsAnswers from './questionsAnswers';
import * as S from './styles';

const Home: React.FC = () => {
  const { push } = useHistory();
  return (
    <S.Container>
      <Base>
        <Container data-testid="Section">
          <S.Section>
            <img
              width="400"
              height="400"
              src={heroImage}
              alt="Ilustração desenvolvida pelo Freepik de mulher registrando alguns papeis em um container"
            />
            <S.Content>
              <Heading
                lineLeft
                lineColor="secondary"
                size="medium"
                color="titleBlack"
              >
                Consulte Editais e Ações Registradas
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam est eveniet quae, fugiat explicabo doloremque hic natus
                repellendus laborum consectetur fuga laboriosam. Fugiat
                molestiae porro maiores sed eaque mollitia id.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam est eveniet quae, fugiat explicabo doloremque hic natus
                repellendus laborum consectetur fuga laboriosam. Fugiat
                molestiae porro maiores sed eaque mollitia id.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam est eveniet quae, fugiat explicabo doloremque hic natus
                repellendus laborum consectetur fuga laboriosam. Fugiat
                molestiae porro maiores sed eaque mollitia id.
              </p>
              <Button
                onClick={() => {
                  push('editais?pagina=1');
                }}
                icon={<SearchIcon />}
              >
                Consultar editais
              </Button>
            </S.Content>
          </S.Section>
        </Container>

        <Divider />

        <Container data-testid="Section">
          <S.Section>
            <S.Content>
              <Heading
                lineLeft
                lineColor="secondary"
                size="medium"
                color="titleBlack"
              >
                Cadastre suas Ações em um Edital
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus pariatur corrupti quod, alias maxime vero numquam
                impedit libero modi commodi tempora quam dolorem qui nihil fuga.
                Voluptates quas nihil temporibus.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus pariatur corrupti quod,
                alias maxime vero numquam impedit libero modi commodi tempora
                quam dolorem qui nihil fuga. Voluptates quas nihil temporibus.
              </p>
              <Button icon={<PenIcon />}>Realizar cadastro</Button>
            </S.Content>
            <img
              width="400"
              height="400"
              src={heroImage}
              alt="Ilustração desenvolvida pelo Freepik de mulher registrando alguns papeis em um container"
            />
          </S.Section>
        </Container>
        <Divider />

        <Container data-testid="Section">
          <S.Section>
            <img
              width="400"
              height="400"
              src={heroImage}
              alt="Ilustração desenvolvida pelo Freepik de mulher registrando alguns papeis em um container"
            />
            <S.Content>
              <Heading
                lineLeft
                lineColor="secondary"
                size="medium"
                color="titleBlack"
              >
                Emita certificados de ações que participou
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus pariatur corrupti quod, alias maxime vero numquam
                impedit libero modi commodi tempora quam dolorem qui nihil fuga.
                Voluptates quas nihil temporibus.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus pariatur corrupti quod,
                alias maxime vero numquam impedit libero modi commodi tempora
                quam dolorem qui nihil fuga. Voluptates quas nihil temporibus.
              </p>
              <Button icon={<UserCheckIcon />}>Emitir certifficado</Button>
            </S.Content>
          </S.Section>
        </Container>

        <Divider />

        <Container data-testid="Section">
          <S.FaqSection>
            <Heading
              lineLeft
              lineColor="secondary"
              size="medium"
              color="titleBlack"
            >
              Perguntas Frequentes
            </Heading>
            {questionsAnswers.map(accordion => (
              <Accordion
                key={accordion.question}
                question={accordion.question}
                answer={accordion.answer}
              />
            ))}
          </S.FaqSection>
        </Container>
      </Base>
    </S.Container>
  );
};

export default Home;
