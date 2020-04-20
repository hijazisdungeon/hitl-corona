import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';

import { Container, Content, StatesButton } from '~/styles/pages/index';

const HomePage = () => (
  <Layout>
    <Head title="Covid Agora - Início" image="/static/images/icon.png">
      <meta
        name="keywords"
        content="covid, covid19, coronavirus, brazil, world"
      />
    </Head>

    <Container>
      <Content>
        <h1>
          Corona<span>vírus</span>
        </h1>

        <StatesButton href="/states">
          Selecionar Estado <FiArrowRight size="3rem" />
        </StatesButton>
        <StatesButton href="/countries">
          Selecionar País <FiArrowRight size="3rem" />
        </StatesButton>
      </Content>
    </Container>
  </Layout>
);

export default HomePage;
