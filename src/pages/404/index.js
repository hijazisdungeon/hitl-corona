import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';

import { Container, Content, BackButton } from './styles';

const NotFoundPage = () => (
  <Layout>
    <Head title="Covid Agora - 404" noDefaultTags />

    <Container>
      <Content>
        <h1>404</h1>
        <h3>Página não Encontrada</h3>

        <BackButton href="/">
          <FiArrowLeft size="2.5rem" /> Voltar para o Início
        </BackButton>
      </Content>
    </Container>
  </Layout>
);

export default NotFoundPage;
